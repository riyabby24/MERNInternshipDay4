const express=require('express');
const app=new express();
const StudentModel=require('./model/StudentData')
//Connect DB
require('./connection')
//Get API
// app.get('/login',(req,res)=>{
//     res.send('Login Page')
// })
// app.get('/',(req,res)=>{
//     res.send('Home Page')
//})
//Student DB
app.use(express.json())

app.get('/students',async(req,res)=>{
   try{
    const data=await StudentModel.find();
    res.send(data)
   }
   catch(error){
    res.send('Data not found!!')
   }
})

app.post('/addstudent',async(req,res)=>{
    try{
         var item=req.body;
         const datasave=new StudentModel(item);
         const savedat=await datasave.save();
         res.send('Data succesfully posted!!')
    } catch(error){
     console.log(error);
    }
})

app.put('/studentedit/:id',async(req,res)=>{
try{
const data=await StudentModel.findByIdandUpdate(req.params.id,req.body);
res.send('Updated succesfully!!')
} catch (error){
console.log(error)
}
})

app.delete('/removestudent/:id',async(req,res)=>{
    try {
        await StudentModel.findByIdandDelete(req.params.id)
        res.send('Deleted succesfully!!')
    } catch (error) {
        console.log(error)
    }
})
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})