const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes() {

        this.app.get("/", function (req, res) {
            //res.send("Hola a todos");
            res.json({
                msg: "API GET /",
            });
        });

        this.app.get("/hola-mundo", function (req, res) {
            res.json({ msg: "Hola desde una ruta diferente" });
        });

        this.app.get("*", function (req, res) {
            res.json({ msg: "Ruta no encontrada" });
        });

        this.app.post("/", function (req, res) {
            res.json({ msg: "hola mundo a traves de un post" });
        });

        this.app.post("*", function (req, res) {
            res.json({ msg: "Ruta no encontrada" });
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;