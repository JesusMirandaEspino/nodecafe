const { response, request } = require( 'express' );
const User = require( '../models/user.js' );
const bcryptjs = require( 'bcryptjs' );


const usersGet =  ( req = request , res = response ) =>  {
    const { q, nombre = 'No name', apikey, page = 5, limit } = req.query
    res.json( {
        msg: 'Get API',
        q,
        nombre,
        apikey,
        page,
        limit
        });
    }

const usersPost = async ( req, res = response ) =>  {


    const { userName, userEmail, userPassword, userRole }= req.body;
    const user = new User( {  userName, userEmail, userPassword, userRole  } );

    //verificar si correo existe


    //Encriptar userPassword
    const salt = bcryptjs.genSaltSync();
    user.userPassword = bcryptjs.hashSync( userPassword, salt );




    //Guardar en DB
    await user.save();

    res.status(201).json( {
        msg: 'Post API',
        user
        });
    }

const usersPut = async ( req, res = response ) =>  {
    const id = req.params.id;
    const { userPassword, Google, userEmail, ...rest  } = req.body;

    //TODO validar con base de datos
    if( userPassword ){
        //Encriptar userPassword
        const salt = bcryptjs.genSaltSync();
        rest.userPassword = bcryptjs.hashSync( userPassword, salt );
    }

    const user = await User.findByIdAndUpdate( id, rest );

    res.json( {
        msg: 'Put API',
        id
        });
    } 

const usersDelete =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Delete API'
        });
    } 
    
const usersPath =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Patch API'
        });
    } 

    module.exports = {
        usersGet,
        usersPost,
        usersPut,
        usersDelete,
        usersPath
    };