const { response } = require('Express');
const User = require('../models/user');
const bcryptjs = require( 'bcryptjs' );
const {generarJWT} = require('../helpers/generarJWT');

const login = async ( req, res = response ) =>  {


    const { userEmail, userPassword } = req.body;


    try{

        
        const user =  await User.findOne( { userEmail } );


        //Verificar si usuario existe 
        if( !user ){
            return res.status(400).json({
                msg: 'Usario / password no son correcto -correo'
            });
        }
                



        //verificar si el usuario esta activo
        if( !user.userStatus ){
            return res.status(400).json({
                msg: 'Usario / password no son correcto - status: false'
            });
        }

        //verificar contraseña
        const validPassword = bcryptjs.compareSync( userPassword, user.userPassword);



        if( !validPassword ){
            return res.status(400).json({
                msg: 'Usario / password no son correcto - password'
            });
        }

        //Generar el JWT
        const token = await generarJWT(  user.id  );


        res.json({
        msg: 'login',
        userPassword

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