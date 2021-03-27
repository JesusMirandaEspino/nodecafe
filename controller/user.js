const { response, request } = require( 'express' );
const Usuario = require( '../models/user.js' );
const bcryptjs = require( 'bcryptjs' );
const { validationResult } = require('express-validator');

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


    const errors = validationResult(  req );
    if(!errors.isEmpty()){
        return res.status(400).json( errors );

    }

    const { userName, userEmail, userPassword, userRole }= req.body;
    const usuario = new Usuario( {  userName, userEmail, userPassword, userRole  } );

    //verificar si correo existe


    //Encriptar userPassword
    const salt = bcryptjs.genSaltSync();
    usuario.userPassword = bcryptjs.hashSync( userPassword, salt );


    const existeEmail = await Usuario.findOne( { userEmail } );
    if( existeEmail ){
        return res.status(400).json({
            msg: 'El correo ya esta Registrado'
        });
    }

    //Guardar en DB
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