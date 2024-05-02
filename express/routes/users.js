const { Router } = require('express');
const { getUsers, createUser, getUser, updateUser, deleteUsers } = require('../controllers/users');

const router = Router();

router.get("/", getUsers);

//Es una subruta de la ruta /api/users
router.get("/getUser", getUser);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUsers);

module.exports = router;