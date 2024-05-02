const { request, response } = require('express'); //Incluimos express para poder usar request y response

const getTvshows = (req = request, res = response) => {
    const params = req.query; //Obtener parametros de la url, ejemplo: /tvshows?name=rick&status=alive

    res.status(200).json({
        msg: "API tvshows GET /",
        params
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