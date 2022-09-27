const { response } = require("express");

module.exports = function(app, config){

    //GET AND  POST SEGUROS
    app.get('/seguro', (request,response) => {
        config.leerSeguro()
        .then(seguro => {
            response.json(seguro);
        }).catch(e => response.status(500).json(e))
    });

    app.post('/seguro', (request,response) => {
        const newSeguro = request.body;
        console.log(newSeguro);

        config.crearSeguro(newSeguro)
        .then(() => {
            response.json({"mensaje": "seguro almacenado"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });
}