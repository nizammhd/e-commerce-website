const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    id:String,
    discription:String,
    gender:String,
    qty:Number,
    category:String,
    image:String

})

const product =mongoose.model('products',productSchema)

module.exports =product