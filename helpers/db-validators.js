const Role = require('../models/role.js');

const esRoleValido = async  (userRole = '' ) => {
            const existeRol = await Role.findOne({userRole});
            if(!existeRol  ){
                throw new Error(`El ${userRole} No existe en la base de datos`);
            }
        }


module.exports = {
    esRoleValido
}