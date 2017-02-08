var mysql      = require('mysql'),
    sqlOptions = require('./sql_options').options,
    
    getSqlStr = 'SELECT name AS tagName, (papers_count + 0) AS paperCount ' +
                'FROM tags_index ' +
                'WHERE papers_count > 0',
    
    connection, 
    client;

var sqlQuery = function(request, callbackFunc) {
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