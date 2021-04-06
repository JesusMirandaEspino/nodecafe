const { response } = require('Express');
const User = require('../models/user');

const login = async ( req, res = response ) =>  {


    const { userEmail, userPassword } = req.body;


    try{

        //Verificar si usuario existe 
        const user =  await User.findOne( { userEmail } );

        if( !user ){
            return res.status(400).json({
                msg: 'Usario / password no son correcto -correo'
            });
        }

        res.json({
        msg: 'login',
        

        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salio mal, hable con el administrador'
        });
    }
}


module.exports = {
    login
}