// os module

const os=require('os');
console.log(os.arch());
console.log(os.freemem()/1024/1024/1024);
console.log(os.hostname());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.userInfo());

const result=os.version();
console.log("Version of the system is :" + result);