var common_formatTime = (dateStr, formatType) => {
    var dateVal    = (String(dateStr).indexOf('-') == -1 && String(dateStr).indexOf('.') == -1) ? parseInt(dateStr) : dateStr,
        date       = new Date(dateVal),

        timeMonth  = (String((parseInt(date.getMonth()) + 1)).length == 1) ? ('0' + (parseInt(date.getMonth()) + 1)) : (parseInt(date.getMonth()) + 1),
        timeDay    = (String(parseInt(date.getDate())).length == 1) ? ('0' + (parseInt(date.getDate()))) : (parseInt(date.getDate())),
        timeLeft   = date.getFullYear() + '-' + timeMonth + '-' + timeDay,
        
        timeHour   = (String(date.getHours()).length == 1) ? ('0' + date.getHours()) : date.getHours(),
        timeMinute = (String(date.getMinutes()).length == 1) ? ('0' + date.getMinutes()) : date.getMinutes(),
        timeSecond = (String(date.getSeconds()).length == 1) ? ('0' + date.getSeconds()) : date.getSeconds(),
        timeRight  = timeHour + ':' + timeMinute + ':' + timeSecond;
    
    if (formatType && formatType == 'full') {
        /* yyyy-mm-dd hh:mm:ss */
        return (timeLeft + ' ' + timeRight);
    }
    else {
        /* yyyy-mm-dd */
        return timeLeft;
    }
};

export default common_formatTime;