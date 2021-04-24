const { Schema, model } = require('mongoose');


const CategoryShema = Schema({
    categoryname:{
        type: String,
        required: [ true, 'EL nombre es obligatorio' ],
        unique: true
    },
    categorystatus: {
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }

});


module.exports = model( 'Category', CategoryShema );    