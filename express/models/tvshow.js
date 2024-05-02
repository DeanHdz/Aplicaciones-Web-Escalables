const mongoose = require('mongoose');

const tvshowSchema = new mongoose.Schema({
    title: String,
    year: Number,
    episodes: Number,
    image: String,
    id: Number
});

module.exports = mongoose.model('TvShow', tvshowSchema); //Exportar modelo de tvshow