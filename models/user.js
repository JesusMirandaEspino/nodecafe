const { Schema, model  } = require( 'mongoose' );


const userShema = Schema({ 
    userName: { 
        type: String,
        required: [ true, 'EL nombre es obligatorio' ]
    },

    userEmail: {
        type: String,
        required: [ true, 'EL nombre es obligatorio' ],
        unique: true
    },

    userPassword: {
        type: String,
        required: [ true, 'La contraseña es obligatoria' ],
    },

    userRole: {
        type: String,
        require: true,
        //enum: [ 'ADMIN_ROLE', 'USER_ROLE' ]
    },

    userStatus: {
        type: Boolean,
        default: true
    },
    
    Google: {
        type: Boolean,
        default: false
    }  

}); 



userShema.methods.toJSON = function(){
    const { __v, userPassword, ...user } = this.toObject();
    return user;
}

module.exports = model( 'User', userShema );