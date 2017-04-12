const routeList = {
    '/'                    : '/index.html',
    '/index'               : '/index.html',
    '/index.html'          : '/index.html',
    '/directory'           : '/index.html',
    '/directory.html'      : '/index.html',
    '/directoryFilter'     : '/index.html',
    '/directoryFilter.html': '/index.html',
    
    '/newPaper': '/index.html'
};

var route = function(dirname, request, response) {
    let path = request.path;

    let paperReg = /(\/paper\?paperId=\d+)|(\/paper\.html\?paperId=\d+)/g;

    if (routeList[path] || paperReg.test(path)) {
        // let fileName = routeList[path] || 'index.html';
        // response.sendFile(dirname + fileName);
        response.sendFile(dirname + '/index.html');
    }
    else {
        response.sendFile(dirname + '/404.html');
    }
};

module.exports.route = route;