const { response, request } = require( 'express' );
const Usuario = require( '../models/user.js' );

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

    const usuario = new Usuario( {  userName, userEmail, userPassword, userRole  } );

    await usuario.save();

    res.status(201).json( {
        msg: 'Post API',
        usuario
        });
    }

const usersPut =  ( req, res = response ) =>  {
    const id = req.params.id;
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