const { Router } = require( 'express' );
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar.js');
const Role = require('../models/role.js');

const {  usersGet, usersPost, usersPut, usersDelete, usersPath } = require( '../controller/user' );

const router = Router();

    router.get( '/',  usersGet  );

    router.put( '/:id', usersPut );

    router.post( '/', [
        check('userName', 'El nombre es obligatorio').not().isEmpty(),
        check('userPassword', 'El password debe de ser mas de 6 letras').isLength( { min: 6 } ) ,
        check('userEmail', 'El correo no es valido').isEmail(),
        //check('userRole', 'No es un Rol Valido').isIn( [ 'ADMIN_ROLE', 'USER_ROLE' ] ),
        check('userRole').custom( async  (userRole = '' ) => {
            const existeRol = await Role.findOne({userRole});
            if(!existeRol  ){
                throw new Error(`El ${userRole} No existe en la base de datos`);
            }
        } ),
        validarCampos
    ] , usersPost );

    router.delete( '/', usersDelete );

    router.patch( '/',  usersPath );


    module.exports = router;