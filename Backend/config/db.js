import mongoose from "mongoose"

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://rojakshsharma987:NickiMinaj12@cluster0.b5w7f.mongodb.net/fooddel').then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}