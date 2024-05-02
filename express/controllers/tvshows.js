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
    const { title, year, episodes, image, id } = req.body;

    if(!title || !year || !episodes || !image || !id) {
        return res.status(400).json({
            msg: "Faltan campos por llenar"
        });
    }

    const newTvshow = new TvShow({
        title,
        year,
        episodes,
        image,
        id
    });

    newTvshow.save().then(
        (result) => {
            res.status(201).json({
                msg: "Elemento insertado con exito"
            });
        }).catch((error) => {
            res.status(500).json({
                msg: "Error al insertar el elemento"
            });
        });
}

const updateTvshow = (req = request, res = response) => {
    const { id } = req.params; //Obtener parametros de la url, ejemplo: /tvshows/123
    const { title, year, episodes, image } = req.body;

    if(!title || !year || !episodes || !image || !id) {
        return res.status(400).json({
            msg: "Faltan campos por llenar"
        });
    }

    TvShow.updateOne({ id: id}, {title: title, year: year, episodes: episodes, image: image })
        .then(
        (result) => {
            res.status(200).json({
                msg: "Elemento actualizado con exito"
            });
        })
        .catch((error) => {
            res.status(500).json({
                msg: "Error al actualizar el elemento"
            });
        });
}

const deleteTvshow = (req = request, res = response) => {
    const { id } = req.params; //Obtener parametros de la url, ejemplo: /tvshows/123

    TvShow.deleteOne({ id: id }).then(
        (result) => {
            res.status(200).json({
                msg: "Elemento eliminado con exito"
            });
        }).catch((error) => {
            res.status(500).json({
                msg: "Error al eliminar el elemento"
            });
        });
}

module.exports = {
    getTvshows,
    getTvshowById,
    createTvshows,
    updateTvshow,
    deleteTvshow
}