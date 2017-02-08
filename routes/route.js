const routeList = {
    '/'              : '/index.html',
    '/index'         : '/index.html',
    '/index.html'    : '/index.html',
    '/directory'     : '/index.html',
    '/directory.html': '/index.html'
};

var route = function(dirname, request, response) {
    let path = request.path;

    if (routeList[path]) {
        response.sendFile(dirname + routeList[path]);
    }
    else {
        response.sendFile(dirname + '/404.html');
    }
};

module.exports.route = route;