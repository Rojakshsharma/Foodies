import mongoose from "mongoose";

const foodSchemma = new mongoose.Schema({
    name:{type:String , required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String},
    category:{type:String,required:true}
})

const foodModel=mongoose.models.food || mongoose.model("food",foodSchemma)

export default foodModel