/* 用于记录客户端访问的ip地址，设置黑名单 */
var fs = require('fs');

var log = function(ip, callbackFunc) {
    const currentDate = new Date();
    const fullDateStr = currentDate.toLocaleString();
    const dateStr     = fullDateStr.slice(0, 16).replace(/\-|\s|\:/g, '_');
    const fileName    = './logs/' + dateStr + '.json';

    fs.readFile(fileName, function(err, data) {
        if (err) {
            fs.writeFile(fileName, '{}', callbackFunc);
        }
        else {
            var originData = JSON.parse(data.toString());

            if (originData.list) {
                originData.list.push(ip);

                fs.writeFile(fileName, JSON.stringify(originData), callbackFunc);
            }
            else {
                originData.list = [ip];

                fs.writeFile(fileName, JSON.stringify(originData), callbackFunc)
            }
        }
    });
};

module.exports.log = log;