var common_setCookie = (name, value, seconds) => {
    var expires  = '',
        lastTime = seconds ? (seconds * 1000) : 0;

    if (lastTime != 0 ) { 
        var date = new Date();  
        date.setTime(date.getTime() + lastTime);  
        expires = "; expires=" + date.toGMTString();  
    }

    document.cookie = name + '=' + escape(value) + expires + '; path=/';

    return true;  
};

export default common_setCookie;