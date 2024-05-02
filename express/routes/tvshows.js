const { Router } = require('express');
const { getTvshows, getTvshowById, createTvshows, updateTvshow, deleteTvshow } = require('../controllers/tvshows');

const router = Router();

router.get("/", getTvshows);

router.get("/:id", getTvshowById);

router.post("/", createTvshows);

router.put("/:id", updateTvshow);

router.delete("/:id", deleteTvshow);

module.exports = router;