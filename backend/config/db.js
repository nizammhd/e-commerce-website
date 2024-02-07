const mongoose=require('mongoose')

const connectDB= async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/project',{
            useNewUrlparser:true,
            useUnifiedTopology:true,
        })
        console.log("db connected")
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports=connectDB