const { response } = require("express");

module.exports = function(app, config){

    app.get('/',(request, response) => {
        response.json({"mensaje": "Hola mundo"});
    });
}