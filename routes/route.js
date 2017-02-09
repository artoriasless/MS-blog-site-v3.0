const routeList = {
    '/'              : '/index.html',
    '/index'         : '/index.html',
    '/index.html'    : '/index.html',
    '/directory'     : '/index.html',
    '/directory.html': '/index.html',
    
    '/newPaper': '/index.html'
};

var route = function(dirname, request, response) {
    let path = request.path;

    if (routeList[path] || path.indexOf('paperId=')) {
        // response.sendFile(dirname + routeList[path]);
        response.sendFile(dirname + '/index.html');
    }
    else {
        response.sendFile(dirname + '/404.html');
    }
};

module.exports.route = route;