const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes() {

        this.app.get("/", function (req, res) {
            res.status(200).json({
                msg: "API GET /",
            });
        });

        this.app.get("/hola-mundo", function (req, res) {
            res.status(200).json({ msg: "Hola desde una ruta diferente" });
        });

        this.app.get("*", function (req, res) {
            res.status(404).json({
                msg: "Error ruta no encontrada",
            });
        });

        this.app.post("/", function (req, res) {
            res.status(200).json({
                msg: "API POST /",
            });
        });

        this.app.post("*", function (req, res) {
            res.status(404).json({
                msg: "Error ruta no encontrada",
            });
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;