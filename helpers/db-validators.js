const Role = require('../models/role.js');
const { User, Category } = require( '../models' );

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

    
const existeUsuarioPorId = async( id = '' ) => {

    const existeUsuario = await User.findById( id );
    if( !existeUsuario ){
        throw new Error(`El id ${id}, no existe`);
        }
    }


    //Validador personalizado sobre categorias



    
const existeCategoryPorId = async( id = '' ) => {

    const existeCategory = await Category.findById( id );
    if( !existeCategory ){
        throw new Error(`El id ${id}, no existe`);
        }
    }



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoryPorId  
}