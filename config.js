var fs = require('fs');
module.exports.list = fs.readFileSync(__dirname+'/list.txt').toString().replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);;
module.exports.webmail = fs.readFileSync(__dirname+'/webmail.txt').toString().replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);;

module.exports.isDomain = (str) => {
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    return str.match(re);
}

module.exports.isEmail = (str) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
}

module.exports.isDisposable = (domain) => {
    return this.list.includes(domain);
}

module.exports.isWebmail = (domain) => {
    return this.webmail.includes(domain);
}