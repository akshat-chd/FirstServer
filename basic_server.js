const express=require("express");
const app=express();
//require db
const db= require('./db')
//using middleware
const body_parser =require("body-parser");
app.use(body_parser.json());
// using env variable
require('dotenv').config();
app.get('/', function(req,res){
    res.send("hello world");
})

app.get('/chill',(req,res)=>{
    res.send("chill out bro");
})
//post route to a person

const personroutes= require('./routes/personroutes');
app.use('/person',personroutes);
const PORT= process.env.PORT || 3000;
app.listen(PORT ,()=>{
    console.log("Listening on Port");
});