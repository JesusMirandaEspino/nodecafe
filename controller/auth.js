const { response } = require('Express');
const User = require('../models/user');
const bcryptjs = require( 'bcryptjs' );
const {generarJWT} = require('../helpers/generarJWT');
const { googleVerify } = require('../helpers/googleVerify');


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
        userPassword,
        token

        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salio mal, hable con el administrador'
        });
    }
}

const googleSignIng = async ( req, res = response ) => {

    const { id_token } = req.body;

    try{

    const { userEmail, userName, userImg } = await  googleVerify( id_token );


    let user = User.findOne( {userEmail} );
    

        if( !user ){
            //Crear usuario
            const data = {
                userName,
                userEmail,
                userPassword: ':p',
                userImg,
                Google: true

            }

            user = new User( data );
        }

    res.json({
        msg: 'Todo ok, google sign in validado',
    });
    }catch(error){
        res.status(400).json({
            msg: 'El token no es valido'
        });
    }



}

module.exports = {
    login,
    googleSignIng
}