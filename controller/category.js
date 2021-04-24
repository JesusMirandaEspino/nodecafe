const response = require('express');
const { Category } = require('../models');

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



module.exports = {
    crearCategory
}