const fs = require('fs');
const Bluebird = require('bluebird');
const readFile = Bluebird.promisify(fs.readFile);
const readdir = Bluebird.promisify(fs.readdir);
const { copy } = require('copy-paste');
const onNpm = require('npm-name');

class Yarg {
    constructor({ include }) {
        this.ignore = ['node_modules'];
        this.includedExtensions = include || [];
        this.matches = [];
        this.unusable = [];
        this.pending = this.getPromise();
    }

    start() {
        this.resolveIncludedExtensions();
        readFile('package.json', 'utf-8').then(res => {
            this.defineDependencies(JSON.parse(res));
            this.search('./')
                .then(() => this.pending)
                .then(() => {
                    this.processOutput();
                });
        });
    }

    resolveIncludedExtensions() {
        this.includedExtensions = this.includedExtensions.map(el => {
            if (el.startsWith('.')) {
                el = el.substr(1);
            }

            return el;
        });

        this.includedExtensions.push('js');
    }

    defineDependencies(config) {
        let base = [];

        if (config.dependencies) {
            base = base.concat(Object.keys(config.dependencies));
        }

        if (config.devDependencies) {
            base = base.concat(Object.keys(config.devDependencies));
        }

        this.owned = base;
    }

    search(dir) {
        return readdir(dir).then(res => {
            let ret = this.getPromise();

            res.forEach(el => {
                let path = this.resolvePath(dir, el);

                ret = ret.then(() => new Promise(resolve => {
                    fs.readFile(path, 'utf-8', (err, file) => {
                        if (err) {
                            if (this.ignore.indexOf(el) === -1) {
                                resolve(this.search(path));
                            } else {
                                resolve(this.getPromise());
                            }
                        } else {
                            if (this.validateFile(path)) {
                                resolve(this.locateTarget(file));
                            } else {
                                resolve(this.getPromise());
                            }
                        }
                    });
                }));
            });

            return ret;
        });
    }

    resolvePath(dir, child) {
        if (dir.substr(-1) !== '/') {
            dir += '/';
        }

        return dir += child;
    }

    validateFile(filePath) {
        const extensionPostition = filePath.lastIndexOf('.');
        const extension = filePath.substr(extensionPostition).substr(1);

        if (this.includedExtensions.indexOf(extension) !== -1) {
            return true;
        }

        return false;
    }

    locateTarget(output) {
        output.replace(/(?!\.)\srequire\(['"](?!\.\/*)([\w-\.\/]+)/g, (m, group) => {
            const match = group.split('/')[0];

            if ((this.owned.indexOf(match) === -1) && !this.isCore(match)) {
                this.pending = this.pending.then(() => onNpm(match).then(notAvailable => {
                    if (!notAvailable) {
                        if (this.matches.indexOf(match) === -1) {
                            this.matches.push(match);
                        }
                    } else {
                        if (this.unusable.length === 0) {
                            console.log('\n');
                        }

                        console.log(`|-- The package "${match}" is used in your application, but is not on NPM.`);
                        this.unusable.push(match);
                    }
                }));
            }
        });
    }

    getPromise(base = '') {
        return new Promise(resolve => resolve(base));
    }

    processOutput() {
        console.log('\n');

        if (this.matches.length) {
            const output = `yarn add ${this.matches.join(' ')}`;

            copy(output, () => {
                console.log('\x1b[36m', 'The following has been copied to your clipboard:', '\x1b[0m\n');
                console.log(output);
                console.log('\n');
            });
        } else if (this.unusable.length === 0) {
            console.log('\x1b[36m', 'Nothing found. You are all set!', '\x1b[0m');
            console.log('\n');
        }
    }

    isCore(mod) {
        return Object.keys(process.binding('natives')).indexOf(mod) !== -1;
    }
}

module.exports = Yarg;
