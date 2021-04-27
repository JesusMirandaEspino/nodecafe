const response = require('express');
const { Category } = require('../models');


const obtenerCategories = async  (req, res = response ) => {

    const statusUser = { userStatus: true };
    const { limite = 5, desde = 0 } = req.query;

    const [ total, categories ] = await Promise.all( [
        Category.countDocuments( statusUser  ),
        Category.find( statusUser  )
        .populate( 'user', 'userName' )
        .skip( Number(desde) )
        .limit( Number(limite) )
    ] );

    res.json( {
        total,
        categories
        });

}



const crearCategory = async  ( req, res = response  ) =>   {
    const categoryname = req.body.categoryname.toUpperCase();
    const categoryDB = await Category.findOne({categoryname});

    if(categoryDB){
        return res.status(400).json({
            msg: 'La categoria ya existe ' // ${categoryDB}
        });
    }

//Generar Guardar
    const data = { 
        categoryname,
        user: red.user._id  
    }

    const category = new Category(data);


    await category.save();

    res.status(200).json(category);

}


const obtenerCategory = async ( req, res = response) => {
    const { id } = req.params;
    const category = await Category.findById(id).populate( 'user', 'userName' );

    res.json({
        category
    });

}



module.exports = {
    crearCategory,
    obtenerCategories,
    obtenerCategory
}