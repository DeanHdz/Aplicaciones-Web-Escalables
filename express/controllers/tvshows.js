const { request, response } = require('express'); //Incluimos express para poder usar request y response
const TvShow = require('../models/tvshow'); //Incluimos el modelo de tvshow

const getTvshows = (req = request, res = response) => {
    const params = req.query; //Obtener parametros de la url, ejemplo: /tvshows?name=rick&status=alive

    TvShow.find().then(
      (result) => {
        res.status(200).json({
            msg: "API tvshows GET /",
            result
        });
    }).catch((error) => {
        res.status(500).json({
            msg: "Error al obtener los datos de tvshows",
            result: []
        });
    });
}

const createTvshows = (req = request, res = response) => {
    const body = req.body;

    res.status(200).json({
        msg: "API tvshows POST /",
        body
    });
}

const updateTvshow = (req = request, res = response) => {
    const params = req.params;
    //const params = req.params.id; //Si se quiere obtener un parametro en especifico

    res.status(200).json({
        msg: "API tvshows PUT /",
        params
    });
}

const deleteTvshows = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshows DELETE /",
    });
}

module.exports = {
    getTvshows,
    createTvshows,
    updateTvshow,
    deleteTvshows
}