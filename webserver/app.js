/*var moment = require('moment');

var time = moment();
console.log(time);*/

const http = require('http');

http.createServer((req, res) => {
    if(req.method == "GET"){
        res.write("Hola a todos");
    }
    else if(req.method == "POST"){
        res.write("Hola mundo");
    }
    else{
        res.write("Hola mundo");
    }
    res.end();
} ).listen(8080);