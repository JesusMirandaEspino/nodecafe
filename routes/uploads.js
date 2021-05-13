const { Router } = require( 'express' );
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen } = require('../controller/uploads')

const { validarCampos } = require('../middlewares/validar.js');



const router = Router();



    router.post( '/', cargarArchivo );

    router.put( '/:coleccion/:id', [], actualizarImagen );



module.exports = router; 