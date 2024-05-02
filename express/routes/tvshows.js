const { Router } = require('express');
const { getTvshows, createTvshows, updateTvshow, deleteTvshows } = require('../controllers/tvshows');

const router = Router();

router.get("/", getTvshows);

router.post("/", createTvshows);

router.put("/:id", updateTvshow);

router.delete("/", deleteTvshows);

module.exports = router;