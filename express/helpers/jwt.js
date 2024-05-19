const jwt = require('jsonwebtoken');

const generateJWT = (id = '') => {
    return new Promise((resolve, reject) => {
        const payload = { id };

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '4h'}, 
            (error, token) => {
            if(error) {
                console.log(err);
                reject('No se pudo generar el token: ' + error);
            }else{
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT
}
