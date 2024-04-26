const { Router } = require('express');

const router = Router();

router.get("/", function (req, res) {
    res.status(200).json({
        msg: "API users GET /",
    });
});

//Es una subruta de la ruta /api/users
router.get("/getUsers", function (req, res) {
    res.status(200).json({
        msg: "API users subroute GET /",
    });
});

router.post("/", function (req, res) {
    res.status(200).json({
        msg: "API users POST /",
    });
});

router.put("/", function (req, res) {
    res.status(200).json({
        msg: "API users PUT /",
    });
});

router.delete("/", function (req, res) {
    res.status(200).json({
        msg: "API users DELETE /",
    });
});

module.exports = router;