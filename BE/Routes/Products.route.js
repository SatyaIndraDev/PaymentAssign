const express = require("express");


const { ProductsModel} =require("../Model/Products.model");


const ProductRouter = express.Router();



ProductRouter.get("/", async(req,res) => {
    try{
        const Detail=await ProductsModel.find()
        if(Detail){
            res.status(200).json({Detail})
        }else{
            res.status(400).json({msg:"Post not Found"})
        }
    }catch(err){
        res.status(400).json({error:err})
    }
})


ProductRouter.post("/", async(req,res) => {
    try{
     console.log(req.body);
     const post = new ProductsModel(req.body);
     await post.save();
     res.json({msg: "Post create successfully"});     
    }catch(err){
     res.json(err);
    }
 })


module.exports = {
    ProductRouter
}