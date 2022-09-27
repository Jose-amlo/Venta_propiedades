const { response } = require("express");

module.exports = function(app, config){

    //GET PROPIEDAD
    app.get('/propiedad', (request,response) => {
        config.leerPropiedad()
        .then(propiedad => {
            response.json(propiedad);
        }).catch(e => response.status(500).json(e))
    });

    //DELETE PROPIEDAD
    app.delete('/propiedad', (request,response) =>{
        config.borrarPropiedad()
        .then(propiedad => {
            propiedad.json(venta);
        }).catch(e => response.status(500).json(e))
    });

    //POST PROPIEDAD
    app.post('/propiedad', (request,response) => {
        const newPropiedad = request.body;
        console.log(newPropiedad);

        config.crearPropiedad(newPropiedad)
        .then(() => {
            response.json({"mensaje": "Propiedad registrada"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });
};