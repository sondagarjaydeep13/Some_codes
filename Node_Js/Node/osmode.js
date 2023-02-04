// Use to find  some os information...!!

const os=require("os");


console.log(os.arch());
console.log(os.hostname());
console.log(os.getPriority());
console.log(os.loadavg());
console.log(os.machine());
console.log(os.freemem());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.version());
console.log(os.userInfo());

