const { request, response } = require('express');

const login = (req = request, res = response) => {

    const { user, password } = req.body;

    if(!user || !password) {
        return res.status(400).json({
            msg: "Faltan campos por llenar"
        });
    }

    if(user == "admin" && password == "admin") {
        //La generacion de JSON WEB TOKEN (JWT) se hace aqui
        return res.status(200).json({
            msg: "Login admin exitoso",
            token: "123456"
        });
    }else{
        return res.status(401).json({
            msg: "Usuario o contraseña incorrectos"
        })
    };

    res.status(200).json({
        msg: "API auth POST /login"
    });
}

module.exports = {
    login
}