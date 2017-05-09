/* 设置每分钟最大请求次数 */
const MAX_VISIT_TIME = 6;
/* 用于记录客户端访问的ip地址，设置黑名单 */
var fs = require('fs');

var log = function(ip, callbackFunc) {
    const currentDate = new Date();
    const fullDateStr = currentDate.toLocaleString();
    const dateStr     = fullDateStr.slice(0, 16).replace(/\-|\s|\:/g, '_');
    const fileName    = './logs/' + dateStr + '.json';

    var blackListTag = false;

    fs.readFile(fileName, function(err, data) {
        if (err) {
            var originData = {
                    'ipList'   : [ip],
                    'visitList': [
                        {
                            'ipAddress'    : ip,
                            'visitDateList': [fullDateStr]
                        }
                    ]
                };
        }
        else {
            var originData = JSON.parse(data.toString()),
                ipCount    = originData.ipList.length,
                ipIndex    = originData.ipList.indexOf(ip);

            if (ipIndex === -1) {
                /* 当前时间（一分钟内）第一次访问 */
                originData.ipList.push(ip);
                originData.visitList.push({
                    'visitDateList': [fullDateStr]
                })
            }
            else {
                var ipVisitDateList = originData.visitList[ipIndex].visitDateList;

                ipVisitDateList.push(fullDateStr);
                blackListTag = (ipVisitDateList.length > MAX_VISIT_TIME) ? true : false;
            }
        }

        fs.writeFile(fileName, JSON.stringify(originData), function() {
            callbackFunc(blackListTag);
        })
    });
};

module.exports.log = log;