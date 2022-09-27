//Knex sirve para poder realizar instancias de mysql con lenguaje Js
const config = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection:{
            host : 'localhost',
            port : 3306,
            user : 'root',
            password : '231465978',
            database : 'venta_propiedades',
        }
    })
    //Crear y Leer usuarios
    const table1 = 'usuario'
    const crearUsuario = ({ nombre_usuario, fecha_nacimiento, correo, telefono_usuario }) => {
        return knex(table1).insert({
            nombre_usuario: nombre_usuario,
            fecha_nacimiento: fecha_nacimiento,
            correo: correo,
            telefono_usuario: telefono_usuario
        });
    };
    const leerUser_vent = () =>{
        return knex(table1).select('usuario.nombre_usuario','usuario.correo','venta.monto_venta').join('venta', {'usuario.nombre_usuario':'venta.nombre_usuario'});
    }
    const leerUsuario = () =>{
        return knex(table1).select()
    }
    const cambiarUsuario = () => {
        return knex(table1).where({'nombre_usuario': "GoldC"}).update({'correo': "si@bla.cl"},{'telefono_cliente': 956894574})
    }
    //Crear y leer ventas
    const table2 = 'venta'
    const crearVenta = ({ mes_venta, monto_venta, nombre_usuario }) => {
        return knex(table2).insert({
            mes_venta: mes_venta,
            monto_venta: monto_venta,
            nombre_usuario: nombre_usuario
        });
    };

    const leerVenta = () =>{
        return knex(table2).select();
    }
    const borrarVenta = () => {
        return knex(table2).delete().whereBetween('monto_venta', [1,200000])
    }
    const cambiarVenta = () => {
        return knex(table2).where({'id_venta': 1}).update({'monto_venta': 450000})
    }

    //Crear y leer seguros
    const table3 = 'seguro'
    const crearSeguro = ({ aseguradora }) => {
        return knex(table3).insert({
            aseguradora: aseguradora
        });
    };

    const leerSeguro = () =>{
        return knex(table3).select();
    }
    //Crear y leer coberturas
    const table4 = 'cobertura'
    const crearCobertura = ({ tipo_cobertura, id_seguro }) => {
        return knex(table4).insert({
            tipo_cobertura: tipo_cobertura,
            id_seguro: id_seguro
        });
    };

    const leerCobertura = () =>{
        return knex(table4).select();
    }

    const dropCobertura = () => {
        return knex.schema.dropTable('cobertura')
    }

    //Crear y leer Administradores
    const table5 = 'administrador'
    const crearAdmin = ({ rut_admin, correo_admin, telefono_admin }) => {
        return knex(table5).insert({
            rut_admin: rut_admin,
            correo_admin: correo_admin,
            telefono_admin: telefono_admin
        });
    };

    const leerAdmin = () =>{
        return knex(table5).select();
    }
    const leerAdmin_prop = () =>{
        return knex(table5).select('administrador.rut_admin','administrador.correo_admin','propiedad.id_propiedad').join('propiedad',{'administrador.rut_admin':'propiedad.rut_admin'})
    }
    //Crear y leer propiedades
    const table6 = 'propiedad'
    const crearPropiedad = ({ region, comuna, calle, numero, nombre_usuario, id_seguro, rut_admin }) => {
        return knex(table6).insert({
            region: region,
            comuna: comuna,
            calle: calle,
            numero: numero,
            nombre_usuario: nombre_usuario,
            id_seguro: id_seguro,
            rut_admin: rut_admin
        });
    };

    const leerPropiedad = () =>{
        return knex(table6).select();
    }
    const borrarPropiedad = () => {
        return knex(table6).delete().where('region', ["Santiago"])
    }

    return{
        crearUsuario,leerUsuario,leerUser_vent, cambiarUsuario,
        crearVenta, leerVenta, borrarVenta, cambiarVenta,
        crearSeguro, leerSeguro,
        crearCobertura, leerCobertura, dropCobertura,
        crearAdmin, leerAdmin, leerAdmin_prop,
        crearPropiedad, leerPropiedad, borrarPropiedad
    };
};

module.exports = {
    config
};