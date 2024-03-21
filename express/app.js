require('dotenv').config(); //Utilizar en paquete de dotenv

const express = require('express');

const app = express();
const port = process.env.PORT;
const ruta = process.env.RUTA;

app.get("/", function(req, res){
    res.send("Hola mundo");
});

app.get(ruta, function(req, res){
    res.send("Hola mundo desde mi ruta");
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

app.listen(port);