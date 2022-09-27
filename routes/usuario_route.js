const { response } = require("express");

module.exports = function(app, config){

    //GETS USUARIO
    app.get('/usuario', (request,response) => {
        config.leerUsuario()
        .then(usuario => {
            response.json(usuario);
        }).catch(e => response.status(500).json(e))
    });

    app.get('/usuario_venta', (request,response) => {
        config.leerUser_vent()
        .then(usuario => {
            response.json(usuario);
        }).catch(e => response.status(500).json(e))
    });

    //POST USUARIO
    app.post('/usuario', (request,response) => {
        const newUsuario = request.body;
        console.log(newUsuario);

        config.crearUsuario(newUsuario)
        .then(() => {
            response.json({"mensaje": "usuario creado"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });

    app.put('/usuario', (request,response) => {
        config.cambiarUsuario()
        .then(() => {
            response.json({"mensaje": "usuario cambiado"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });
}