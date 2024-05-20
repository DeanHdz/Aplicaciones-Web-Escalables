const { Router } = require('express');
const { getTvshows, getTvshowById, createTvshow, updateTvshow, deleteTvshow } = require('../controllers/tvshows');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');

const router = Router();

router.get("/", [validateJWT], getTvshows);

router.get("/:id", [validateJWT, verifyAdminRole] ,getTvshowById);

router.post("/", createTvshow);

router.put("/:id", updateTvshow);

router.delete("/:id", deleteTvshow);

module.exports = router;