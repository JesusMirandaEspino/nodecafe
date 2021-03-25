const { response, request } = require( 'express' );

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

const usersPost =  ( req, res = response ) =>  {
    const { nombre, edad } = req.body;
    res.status(201).json( {
        msg: 'Post API',
        nombre,
        edad,
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