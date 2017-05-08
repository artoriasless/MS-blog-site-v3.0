var express = require('express'),
    app     = express(),
    server,

    bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({
        extended: false
    }),

    log = require('./log').log;

/* router level */
var router = require('./routes/route.js');

/* controller level */
var controller = require('./controllers/controller.js').controller;

app.use(express.static('static'));

app.get('/*', function(request, response) {
    var clientIp        = request.headers['x-real-ip'] ? request.headers['x-real-ip'] : request.ip.replace(/::ffff:/, ''),
        logCallbackFunc = function() {
            router.route(__dirname, request, response);
        };

    /* 记录客户端访问者的ip，用于设置黑名单 */
    log(clientIp, logCallbackFunc);
});

app.post('/*', urlencodedParser, function(request, response) {
    controller(request, response);
});

server = app.listen(8181, function() {
	console.info('app sample,view address：http://127.0.0.1:8181');
});
