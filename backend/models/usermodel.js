

//usermodel


const mongoose =require('mongoose')



const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
,
    wishlist:[{
        type:String,
        required:false,
    }],

    cart:[{
        type:String,
        required:false,
    }],
})

const UserSch=mongoose.model('users',userSchema)
module.exports=UserSch
