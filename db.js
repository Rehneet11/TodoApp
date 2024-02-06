const mongoose  =require("mongoose");

mongoose.connect("mongodb+srv://rstudy156:njnTKZcB3pCvPsqH@rehneet.oxzwkog.mongodb.net/todoss");
 const TodoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
 },{timestamps:true})

 const todo =mongoose.model("todos",TodoSchema);
 module.exports={
    todo
 }