const { request, response } = require('express'); //Incluimos express para poder usar request y response

const getTvshows = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshows GET /",
    });
}

const createTvshows = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshows POST /",
    });
}

const updateTvshows = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshows PUT /",
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
    updateTvshows,
    deleteTvshows
}