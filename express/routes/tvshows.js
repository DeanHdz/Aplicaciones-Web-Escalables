const { Router } = require('express');
const { getTvshows, createTvshows, updateTvshows, deleteTvshows } = require('../controllers/tvshows');

const router = Router();

router.get("/", getTvshows);

router.post("/", createTvshows);

router.put("/", updateTvshows);

router.delete("/", deleteTvshows);

module.exports = router;