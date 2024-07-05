const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({
 fName:String,
 age:Number,
 location:String
})
const StudentData=mongoose.model('studentdetail',StudentSchema);
module.exports=StudentData
