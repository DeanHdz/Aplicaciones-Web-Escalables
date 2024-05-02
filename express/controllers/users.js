const { request, response } = require('express'); //Incluimos express para poder usar request y response

const getUsers = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users GET /",
    });
}

const getUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users subroute GET /",
    });
}

const createUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users POST /",
    });
}

const updateUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users PUT /",
    });
}

const deleteUsers = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users DELETE /",
    });
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUsers
}