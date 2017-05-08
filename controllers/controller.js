var controllerList = {
    '/getTags.node'           : 'get_tags',
    '/getLatest.node'         : 'get_latest',
    '/getTimeline.node'       : 'get_timeline',
    '/getDirectory.node'      : 'get_directory',
    '/getDirectoryFilter.node': 'get_directory_filter',
    '/getPaper.node'          : 'get_paper',
    '/getComments.node'       : 'get_comments',

    '/addPaper.node'     : 'add_paper',
    '/addComment.node'   : 'add_comment',
    '/addSubcomment.node': 'add_subcomment'
};

var controller = function(request, response) {
    var callbackFunc  = function(resultObj) { response.json(resultObj); };
    
    if (controllerList[request.path]) {
        var viewSqlModule = require('../models/' + controllerList[request.path] +'.js')
        viewSqlModule.sqlQuery(request, callbackFunc);
    }
}

module.exports.controller = controller;