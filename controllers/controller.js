var controllerList = {
    '/getTags.node'           : 'get_tags',
    '/getLatest.node'         : 'get_latest',
    '/getTimeline.node'       : 'get_timeline',
    '/getDirectory.node'      : 'get_directory',
    '/getDirectoryFilter.node': 'get_directory_filter',
    '/getPaper.node'          : 'get_paper'
};

var controller = function(request, response) {
    var callbackFunc  = function(resultObj) { response.json(resultObj); },
        viewSqlModule = require('../models/' + controllerList[request.path] +'.js');
    
    viewSqlModule.sqlQuery(request, callbackFunc);
}

module.exports.controller = controller;