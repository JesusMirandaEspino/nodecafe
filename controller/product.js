const response = require('express');
const { Product } = require('../models');


const obtenerProducts = async  (req, res = response ) => {

    const statusUser = { userStatus: true };
    const { limite = 5, desde = 0 } = req.query;

    const [ total, products ] = await Promise.all( [
        Product.countDocuments( statusUser  ),
        Product.find( statusUser  )
        .populate( 'user', 'userName' )
        .skip( Number(desde) )
        .limit( Number(limite) )
    ] );

    res.json( {
        total,
        products
        });

}



const crearProduct = async  ( req, res = response  ) =>   {
    const productname = req.body.productname.toUpperCase();
    const productDB = await Product.findOne({productname});

    if(productDB){
        return res.status(400).json({
            msg: 'La producto ya existe ' // ${categoryDB}
        });
    }

//Generar Guardar
    const data = { 
        productname,
        user: req.user._id  
    }

    const product = new Product(data);


    await product.save();

    res.status(200).json(product);

}


const actualizarProduct = async ( req, res = response ) => {
    const { id } = req.params;
    const { userStatus, user, ...data } = req.body;

    data.productname = data.productname.toUpperCase();
    data.user = req.user._id;

    const product = await Product.findByIdAndUpdate( id, data,  { new: true  } );

    res.json( { product } );

}



const obtenerProduct = async ( req, res = response) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate( 'user', 'userName' );

    res.json({
        product
    });

}


const borrarProduct = async  ( req, res = response ) => {

    const { id } = req.params;
    const productoBorrado = await Product.findByIdAndUpdate( id, { available: false }, { new: true } );
    res.status(200).json({ productoBorrado });
}


module.exports = {
    obtenerProducts,
    crearProduct,
    actualizarProduct,
    obtenerProduct,
    borrarProduct
}