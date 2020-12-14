module.exports = {
    development: {
        port: process.env.PORT ||3050,
        authCookieName: 'x-auth-token',
        //това е името на cookie което ще се показва на  потребителя
        dataBaseURL: 'mongodb+srv://user:softuni-password@softuni-oydey.mongodb.net/cooking_recipes?retryWrites=true&w=majority',
        //да сменя името на DB
        secretKey: 'Nemezida-Azimov',
        // тук пишем ключа и се импортва в където трябва
    },
    production: {}
};