const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = "/api/users";
        this.tvshowsPath = "/api/tvshows";

        this.routes();
    }

    routes() {

        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));

        this.app.get("*", function (req, res) {
            res.status(404).json({
                msg: "Error ruta no encontrada",
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