var mysql      = require('mysql'),
    sqlOptions = require('./sql_options').options,
    
    getSqlStr,
    connection, 
    client;

var sqlQuery = function(request, callbackFunc) {
    getSqlStr = '(SELECT id, title, LEFT(publish_date, 10) AS date, tag, subtag, content ' +
                'FROM papers_table WHERE id < "' + request.body.currentPaperId + '" ORDER BY id DESC LIMIT 1) ' +
                'UNION ' +
                '(SELECT id, title, LEFT(publish_date, 10) AS date, tag, subtag, content ' +
                'FROM papers_table WHERE id = "' + request.body.currentPaperId + '") ' +
                'UNION ' +
                '(SELECT id, title, LEFT(publish_date, 10) AS date, tag, subtag, content ' +
                'FROM papers_table WHERE id > "' + request.body.currentPaperId + '" ORDER BY id ASC LIMIT 1)';

    client = mysql.createConnection(sqlOptions.connection);

    client.connect(function(err) {
        if (err) { return err; }
    });
    
    client.query(getSqlStr, function(err, results, fields) {
        if (err) { return err; }
        else {
            callbackFunc(results);
        }

        client.end(function(err) {
            if (err) { return err; }
        })
    })
};

module.exports.sqlQuery = sqlQuery;