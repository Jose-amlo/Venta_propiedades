const { response } = require("express");

module.exports = function(app, config){

    //GET ADMIN
    app.get('/administrador', (request,response) => {
        config.leerAdmin()
        .then(administrador => {
            response.json(administrador);
        }).catch(e => res.status(500).json(e))
    });

    app.get('/administrador_propiedad', (request,response) => {
        config.leerAdmin_prop()
        .then(administrador => {
            response.json(administrador);
        })
    });

    //POST ADMIN
    app.post('/administrador', (request,response) => {
        const newAdmin = request.body;
        console.log(newAdmin);

        config.crearAdmin(newAdmin)
        .then(() => {
            response.json({"mensaje": "Administrador registrado"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });
}