import express, { application } from "express";

const app=express();
const port=9000;

app.use("/",(req,res)=>{
    res.json({message:"Hello from expresss"})

})

app.listen(9000,()=>{

    console.log("Start server at the port 9000")
})