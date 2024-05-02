const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = "/api/users";
        this.tvshowsPath = "/api/tvshows";

        this.middlewares();
        this.routes();
    }

    routes() {

        //Utilizar routes definidos en los archivos
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));

        //Responses para cuando no encuentra la ruta solicitada
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

    middlewares(){
        this.app.use(express.json()); //Permitir usar json
        this.app.use(cors()); //Permitir peticiones de otros servidores
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server; //Exportar clase servidor