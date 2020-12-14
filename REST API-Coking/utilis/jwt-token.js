const env = process.env.NODE_ENV || "development";
const config = require('../config/config')[env];
//трябва и двете да се сложат задасе require sectetKey
//навсякъдекъдето се require config върви с двата реда отгоре

const jwt = require('jsonwebtoken');

//когато се логва потребител се сравняват паролите хеширани

const createToken = (data) => {
    //iсъздаваме токен
    const userToken = jwt.sign(data, config.secretKey,{expiresIn: '10h'})  
    return userToken;
};

//тук се обръща наличния във базата токен на логнатия потребител от токен към id-в случая
const verifyToken = (token) => {
    return new Promise((resolve,reject) => {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                 reject(err);
                 return
            }
            resolve(decoded)
        }) 
    })
};


module.exports = {
    createToken,
    verifyToken
}
