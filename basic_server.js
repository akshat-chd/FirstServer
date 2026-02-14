const express=require("express");
const app=express();
const db= require('./db')
const body_parser =require("body-parser");
app.use(body_parser.json());

app.get('/', function(req,res){
    res.send("hello world");
})

app.get('/chill',(req,res)=>{
    res.send("chill out bro");
})
//post route to a person

const personroutes= require('./routes/personroutes');
app.use('/person',personroutes);
app.listen(3000);