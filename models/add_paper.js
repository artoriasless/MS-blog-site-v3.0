var mysql      = require('mysql'),
    sqlOptions = require('./sql_options').options,
    
    addSqlStr,
    connection, 
    client;

var sqlQuery = function(request, callbackFunc) {
    var title        = request.body.title,
        tag          = request.body.tag,
        subtag       = request.body.subtag,
        publish_data = request.body.publish_data,
        abstract     = request.body.abstract,
        content      = request.body.content,
        values       = '\'' + title + '\',\'' + tag + '\',\'' + subtag + '\',\'' + publish_data + '\',\'' + abstract + '\',\'' + content + '\'';

    addSqlStr = 'INSERT INTO papers_table ' +
                '(title, tag, subtag, publish_date, timeline, abstract, content) ' +
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