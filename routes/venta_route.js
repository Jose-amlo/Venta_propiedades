const { response } = require("express");

module.exports = function(app, config){

    //GET VENTA
    app.get('/venta', (request,response) => {
        config.leerVenta()
        .then(venta => {
            response.json(venta);
        }).catch(e => response.status(500).json(e))
    });

    //DELETE VENTA
    app.delete('/venta', (request,response) =>{
        config.borrarVenta()
        .then(venta => {
            response.json(venta);
        }).catch(e => response.status(500).json(e))
    });

    //POST VENTA
    app.post('/venta', (request,response) => {
        const newVenta = request.body;
        console.log(newVenta);

        config.crearVenta(newVenta)
        .then(() => {
            response.json({"mensaje": "Venta almacenada"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });

    //PUT VENTA
    app.put('/venta', (request,response) => {
        config.cambiarVenta()
        .then(() => {
            response.json({"mensaje": "venta cambiada"});
         }).catch(e => {
            response.status(500).json(e);
         });
    });
}