/* 设置每分钟最大请求次数 */
var MAX_VISIT_TIME = 6;
/* 用于记录客户端访问的ip地址，设置黑名单 */
var fs = require('fs');
/* 设置时间格式（在linux下的 tolocalString 和window下的格式不同） */
var formatTime = (date) => {
    var timeMonth  = (String((parseInt(date.getMonth()) + 1)).length == 1) ? ('0' + (parseInt(date.getMonth()) + 1)) : (parseInt(date.getMonth()) + 1),
        timeDay    = (String(parseInt(date.getDate())).length == 1) ? ('0' + (parseInt(date.getDate()))) : (parseInt(date.getDate())),
        timeLeft   = date.getFullYear() + '-' + timeMonth + '-' + timeDay,
        
        timeHour   = (String(date.getHours()).length == 1) ? ('0' + date.getHours()) : date.getHours(),
        timeMinute = (String(date.getMinutes()).length == 1) ? ('0' + date.getMinutes()) : date.getMinutes(),
        timeSecond = (String(date.getSeconds()).length == 1) ? ('0' + date.getSeconds()) : date.getSeconds(),
        timeRight  = timeHour + ':' + timeMinute + ':' + timeSecond;
    
    /* yyyy-mm-dd hh:mm:ss */
    return (timeLeft + ' ' + timeRight);
};

var log = function(ip, callbackFunc) {
    var fullDateStr  = formatTime(new Date()),
        dateStr      = fullDateStr.slice(0, 16).replace(/\-|\s|\:/g, '_'),
        dateStrShort = dateStr.slice(0, 10),
        fileName     = './logs/' + dateStrShort + '.json';
        blackListTag = false;

    fs.readFile(fileName, function(err, data) {
        if (err) {
            var originData = {};

            originData[dateStr] = {
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
            var originData   = JSON.parse(data.toString());

            if (!originData[dateStr]) {
                /* 新的一分钟（一个周期）开始 */
                originData[dateStr] = {};
                originData[dateStr].ipList    = [ip];
                originData[dateStr].visitList = [{
                    'ipAddress'    : ip,
                    'visitDateList': [fullDateStr]
                }];
            }
            else {
                /* 还未过一分钟 */
                var ipIndex = originData[dateStr].ipList.indexOf(ip),
                    ipCount = originData[dateStr].ipList.length;
                
                if (ipIndex === -1) {
                    /* 当前时间（一分钟内）第一次访问 */
                    originData[dateStr].ipList.push(ip);
                    originData[dateStr].visitList.push({
                        'ipAddress'    : ip,
                        'visitDateList': [fullDateStr]
                    })
                }
                else {
                    var ipVisitDateList = originData[dateStr].visitList[ipIndex].visitDateList;

                    ipVisitDateList.push(fullDateStr);
                    blackListTag = (ipVisitDateList.length > MAX_VISIT_TIME) ? true : false;
                }
            }
        }

        fs.writeFile(fileName, JSON.stringify(originData), function() {
            /* 正常保存当天访问者ip信息后，将该ip信息记录到汇总信息中 */
            fs.readFile('./logs/summary.json', function(summaryErr, summaryData) {
                var ipKey = ip.replace(/\./g, '_'),
                    initData;

                if (summaryErr) {
                    initData = {}; 

                    initData[ipKey] = {
                        'visitDate' : [fullDateStr],
                        'visitTimes': 1
                    };
                }
                else {
                    initData = JSON.parse(summaryData.toString());

                    if (!initData[ipKey]) {
                        initData[ipKey] = {
                            'visitDate' : [fullDateStr],
                            'visitTimes': 1
                        };
                    }
                    else {
                        if (initData[ipKey].visitDate.indexOf(fullDateStr) == -1) {
                            initData[ipKey].visitDate.push(fullDateStr);
                        }
                        initData[ipKey].visitTimes += 1;
                    }
                }

                fs.writeFile('./logs/summary.json', JSON.stringify(initData), function() {
                    /* 正常保存访问者的ip信息到总览，并调用回调函数 */
                    callbackFunc(blackListTag);
                });
            });
        });
    });
};

module.exports.log = log;