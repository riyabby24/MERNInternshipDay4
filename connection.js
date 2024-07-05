const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://riavveettil04:Rachel24@cluster0.2jg7stb.mongodb.net/firstNodeDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((error)=>{
console.log('DB failed to connect')
});