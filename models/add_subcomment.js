var mysql      = require('mysql'),
    sqlOptions = require('./sql_options').options,
    
    addSqlStr,
    connection, 
    client;

var sqlQuery = function(request, callbackFunc) {
    var type        = request.body.type,
        paperId     = request.body.paperId,
        userName    = request.body.userName,
        content     = request.body.content,
        commentDate = request.body.commentDate,
        upcommentId = request.body.upcommentId,
        values      = '\'' + type + '\',\'' + paperId + '\',\'' + userName + '\',\'' + content + '\',\'' + commentDate + '\',\'' + upcommentId + '\'';

    addSqlStr = 'INSERT INTO subcomment_table ' +
                '(type, paper_id, user_name, content, comment_date, comment_id) ' +
                'VALUES (' + values + ')';

    client = mysql.createConnection(sqlOptions.connection);

    client.connect(function(err) {
        if (err) { return err; }
    });
    
    client.query(addSqlStr, function(err, results) {
        if (err) { 
            callbackFunc({
                status: 'fail'
            })
            return err; 
        }
        else {
            callbackFunc({
                status: 'success'
            });
        }

        client.end(function(err) {
            if (err) { return err; }
        })
    })
};

module.exports.sqlQuery = sqlQuery;