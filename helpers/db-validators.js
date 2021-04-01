const Role = require('../models/role.js');
const User = require( '../models/user.js' );

const esRoleValido = async  (userRole = '' ) => {
            const existeRol = await Role.findOne({userRole});
            if(!existeRol  ){
                throw new Error(`El ${userRole} No existe en la base de datos`);
            }
        }

    
const emailExiste = async( userEmail = '' ) => {

    const existeEmail = await User.findOne( { userEmail } );
    if( existeEmail ){
        throw new Error(`El correo ${userEmail}, ya esta Registrado`);
        }
    }






module.exports = {
    esRoleValido,
    emailExiste 
}