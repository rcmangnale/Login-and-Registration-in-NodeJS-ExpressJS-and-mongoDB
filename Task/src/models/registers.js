const mongoose = require('mongoose');

const employeeSchema =new mongoose.Schema({
    
    FullName:{
        type:String,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
    },
    MobileNo:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    }
})



const Register=new mongoose.model("Register",employeeSchema);

module.exports = Register;