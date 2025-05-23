import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food item
const addFood=async (req,res)=>{
    let image_fileName=`${req.file.filename}`
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_fileName
    })

    console.log(food)
    
    try{
        await food.save()
        res.json({success:true,message:"Food added"})
    }
    catch (error){
        console.log(error)
        res.json({success:false,message:"Error"})  
    }
}

// all food list
const listFood=async (req,res)=>{
    try{
        const food = await foodModel.find({})
        res.json({success:true,data:food})
    }
    catch(error){
        console.log(error)
        res.json({sucess:false,message:"Error"})
    }
}

// removing items
const removeFood=async(req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}