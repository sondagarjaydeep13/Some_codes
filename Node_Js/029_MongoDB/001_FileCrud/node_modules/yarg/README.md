# Yarg
### A dependency locator for node

## Install
```
yarn global add yarg
```

 or

```
npm install --global yarg
```

## Usage
```
yarg
```

Running this command will search your project's entire directory for modules which you have required in your project, but have not installed. When finished, it will generate a "yarn add" command that, when run, will install your dependencies.