const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
require('dotenv').config();
const User = require('./models/SignUpModal')
const app = express();
const jwt = require('jsonwebtoken')
const cors = require('cors')

const userRouter = require('./routes/userRoutes')

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
   
})
.then(() => {
    console.log('Successfully connected to MongoDB!');
})
.catch(err => {
    console.error('Failed to connect to MongoDB Atlas:', err);
});

//defining routes 
app.use('/api' , userRouter)


//catching the global erro 
app.use((err ,req, res ,next)=>{
    res.status(err.statusCode || 500).json({
        message : err.message || "Internal Server Error"
    })
    next()
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
