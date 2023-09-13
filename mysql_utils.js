class mysql_utils {
    constructor() {
        var mysql = require('mysql');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'GenshinTools'
        });
    }
    getAllData(tableName = 'test') {
        this.connection.connect();
        // 使用 Promise 封装异步操作
        return new Promise((resolve, reject) => {
            this.connection.query('select * from ' + tableName, function (error, results, fields) {
                if (error) {
                    reject(error); // 如果出现错误，将错误传递给 reject
                } else {
                    resolve(results[0]); // 如果成功，将结果传递给 resolve
                }
            });
        });
    }
    createTable(tableName = 'test', valuesQuery=''){
        this.connection.connect();
        return new Promise((resolve, reject) => {
            this.connection.query('create table '+tableName+' VALUES('+valuesQuery+')', function (error, results, fields) {
                if (error) {
                    reject(error); // 如果出现错误，将错误传递给 reject
                } else {
                    resolve(results[0]); // 如果成功，将结果传递给 resolve
                }
            });
        });
    }
}

module.exports = {
    mysql_utils,
};