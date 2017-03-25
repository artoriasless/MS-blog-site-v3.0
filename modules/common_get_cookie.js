var common_getCookie = (name) => {
    var nameEQ    = name + '=',  
        cookieArr = document.cookie.split(';');
    
    for (var i = 0; i < cookieArr.length; i++) {  
        var cookie = cookieArr[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1,cookie.length);
        }  
        if (cookie.indexOf(nameEQ) == 0) {
            return unescape(cookie.substring(nameEQ.length,cookie.length));
        }  
    }
    
    return false; 
};

export default common_getCookie;