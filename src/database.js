import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log("DB connected and running");
    }catch (e){
        console.log("DB not connected :(");
        console.log(e)
    }

}