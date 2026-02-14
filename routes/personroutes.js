const express= require("express");
const router = express.Router();
const person =require("./../models/person");
const Person = require("./../models/person");
router.post('/', async(req,res)=>{
    try{
        const data= req.body;
        const newP=new person(data);
        const response= await newP.save();
        console.log('data saved' );
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});

    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log("data fecthed");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});

    }
})
router. get('/:worktype',async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef'||worktype=='manager'||worktype=='waiter')
        {
            const response= await Person.find({work:worktype});
            res.status(200).json(response);
            console.log("fetched success");
        }
        else{
            res.status(400).json({error:"Invalid Request"});
        }

    }
    catch(err)
    {
          console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})
router.put('/:id',async (req,res)=>{
    try{
        const id= req.params.id;
        const data= req.body;
        const response = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })
        if(!response){
            return  res.status(404).json("Not found");
        }
        console.log("Data Updated");
        res.status(200).json("Updated Suceesfully");

    }
    catch(err)
    {
          console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})
router.delete('/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const response = await Person.findByIdAndDelete(id);
          if(!response){
            return  res.status(404).json("Not found");
        }
        console.log("Data Deleted");
        res.status(200).json("Deleted Suceesfully");
    }
     catch(err)
    {
          console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})
module.exports=router;