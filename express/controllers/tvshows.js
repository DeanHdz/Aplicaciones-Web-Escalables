const { request, response } = require('express'); //Incluimos express para poder usar request y response
const TvShow = require('../models/tvshow'); //Incluimos el modelo de tvshow

const getTvshows = (req = request, res = response) => {
    const { searchTerm } = req.query; //Obtener parametros de la url, ejemplo: /tvshows?name=rick&status=alive

    //Para filtrar con campos extra en find, agregar un coma y el campo a filtrar
    TvShow.find({ title: RegExp(searchTerm) }).then(
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

const getTvshowById = (req = request, res = response) => {

    const { id } = req.params; //Obtener parametros de la url, ejemplo: /tvshows/123
    
    TvShow.findOne({ id: id }).then(
        (result) => {
            res.status(200).json({
                msg: "API tvshows GET /:id",
                result
            });
        }).catch((error) => {
            res.status(500).json({
                msg: "Error al obtener los datos de tvshows",
                result: null
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
    getTvshowById,
    createTvshows,
    updateTvshow,
    deleteTvshows
}