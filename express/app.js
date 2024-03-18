const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hola mundo");
});

app.get("/hola-mundo", function(req, res){
    res.send("Hola desde una ruta diferente");
});

app.get("*", function(req, res){
    res.send("Ruta no encontrada");
});

app.post("/", function (req, res){
    res.send("hola mundo a traves de un post");
});

app.post("*", function (req, res){
    res.send("Ruta no encontrada");
});

app.listen(8080);