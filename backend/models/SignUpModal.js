const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
      
    },
    password: {
        type: String,
        required: true,
        minlength : 8
    },
    passwordConfirm :{
        type : String ,
        required:[true , 'Please Confirm your password'],
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password , 12)
    // delete the confirm password
    this.passwordConfirm = undefined ;
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;

