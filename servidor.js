const {response} = require ('express');
var http = require('http');
var url = require('url');       /* Para recuperar nome e bairro passados do arquivo HTML */
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"webdb"
    });


http.createServer(
    function (req, res){

        
        var querystring = url.parse(req.url, true).query;
        var sql = querystring['sql'];
            con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });
            });
    }


).listen(8080);