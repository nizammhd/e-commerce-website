//cartControllers

const jwt = require('jsonwebtoken')
const userdb = require('../models/usermodel')
const productdb=require('../models/productModel')

// exports.addToCart = async (req, res) => {
//     try{
//     const {_id} =req.body;
//         const UserEmail=req.user.email;
//         console.log(_id,"id from params")
//         const user=await userdb.findOne({email:UserEmail})
       

//         if(!user){
//            return res.status(404).send('user not found')
//         }
//         const existingProductIndex= await user.cart.findIndex((item)=>{
            
//             item.product.toString()===_id
//         })
//         console.log(user.cart)
        

//         if(existingProductIndex !== -1){
//             res.send("product already have ")
                  
//       }else{
//         const product= await productdb.findById(_id)

//         if(product){
//             console.log(product)
//             user.cart.push(product)
//             res.send('product added to wishlist')

            
//             await user.save()
//         }else{
//             res.status(404).send('product not found')
//         }
       
//       }
//     }catch(err){
//         console.error(err);
//         res.status(500).send('Error adding product to wishlist');
//     }
// };

exports.addToWishlist =async (req,res) =>{
    try{

        const {_id} =req.body;
        const UserEmail=req.user.email;
        console.log(_id,"id from params")
        const user=await userdb.findOne({email:UserEmail})
       
        console.log(user)
        if(!user){
           return res.status(404).send('user not found')
        }
        const existingProductIndex= await user.wishlist.findIndex((item)=>{
            
            item.product._id.toString()===_id
        })
        

        if(existingProductIndex !== -1){
            res.send("product already have ")
                  
      }else{
        const product= await productdb.findById(_id)

        if(product){
            console.log(product)
            user.wishlist.push(product)
            res.send('product added to wishlist')

            
            await user.save()
        }else{
            res.status(404).send('product not found')
        }
       
      }
    }catch(err){
        console.error(err);
        res.status(500).send('Error adding product to wishlist');
    }
}
