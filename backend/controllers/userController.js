const User = require('./../models/SignUpModal')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signUp = async (req, res, next) => {
    const { name, email, password ,passwordConfirm } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const newUser = new User({
            name,
            email,
            password,
            passwordConfirm
           
        });

        await newUser.save();

       
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
     next(error)
    
    }
}


exports.login = async (req,res, next) =>{
    try{
    const {email , password} = req.body

    const user = await User.findOne({email}) ;
    if(!user){
        const error = new Error("Invalid Email or Password")
        error.statusCode = 400 
        throw error
    }
const MatchPassword = await bcrypt.compare(password, user.password)
if(!MatchPassword){
    const error = new Error("Password is incorrect")
     error.statusCode = 400 
        throw error
}

 const token = jwt.sign({id : user._id}, "hello-this-is-the-secret-string", {
    expiresIn : '10d' 
 })

 res.status(200).json({
    message : "User Login Successfull",
    token
 })
}catch(error){
next(error)
}
}
