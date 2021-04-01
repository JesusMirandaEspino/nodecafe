const { Router } = require( 'express' );
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar.js');
const { esRoleValido } = require( '../helpers/db-validators' );




const {  usersGet, usersPost, usersPut, usersDelete, usersPath } = require( '../controller/user' );

const router = Router();

    router.get( '/',  usersGet  );

    router.put( '/:id', usersPut );

    router.post( '/', [
        check('userName', 'El nombre es obligatorio').not().isEmpty(),
        check('userPassword', 'El password debe de ser mas de 6 letras').isLength( { min: 6 } ) ,
        check('userEmail', 'El correo no es valido').isEmail(),
        //check('userRole', 'No es un Rol Valido').isIn( [ 'ADMIN_ROLE', 'USER_ROLE' ] ),
        check('userRole').custom( esRoleValido ),
        validarCampos
    ] , usersPost );

    router.delete( '/', usersDelete );

    router.patch( '/',  usersPath );


    module.exports = router;