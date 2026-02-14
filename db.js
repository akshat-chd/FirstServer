const mongoose= require('mongoose');
const mongourl= 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongourl,{

});
const db = mongoose.connection;
db.on('connected',()=>{
    console.log("connected to server");
});
db.on('error',(err)=>{
    console.error("error to server",err);
});
db.on('disconnected',()=>{
    console.log("disconnected to server");
})

module.exports=db;