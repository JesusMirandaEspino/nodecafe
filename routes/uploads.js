const { Router } = require( 'express' );
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controller/uploads')

const { coleccionesPermitidas } = require('../helpers');

const { validarCampos } = require('../middlewares/validar.js');



const router = Router();



    router.post( '/', cargarArchivo );

    router.put( '/:coleccion/:id', [ 
        check( 'id', 'El id debe ser de mongo' ).isMongoId(),
        check( 'coleccion' ).custom( c => coleccionesPermitidas( c, [ 'users', 'products'  ] ) ),
        validarCampos
    ], actualizarImagen );



module.exports = router; 