const { Router } = require( 'express' );
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen, mostrarImagen, actualizarImagenCloudinary } = require('../controller/uploads');


const { coleccionesPermitidas } = require('../helpers');

const { validarCampos, validarArchivo } = require('../middlewares');



const router = Router();



    router.post( '/', validarArchivo, cargarArchivo );

    router.put( '/:coleccion/:id', [
        validarArchivo, 
        check( 'id', 'El id debe ser de mongo' ).isMongoId(),
        check( 'coleccion' ).custom( c => coleccionesPermitidas( c, [ 'users', 'products'  ] ) ),
        validarCampos
    ], actualizarImagenCloudinary
    //actualizarImagen 
    );


    router.get( '/:coleccion/:id', [ 
        check( 'id', 'El id debe ser de mongo' ).isMongoId(),
        check( 'coleccion' ).custom( c => coleccionesPermitidas( c, [ 'users', 'products'  ] ) ),
        validarCampos        
    ], mostrarImagen

    );



module.exports = router; 