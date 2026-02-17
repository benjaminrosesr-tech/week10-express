import express from "express";
import db from "../dbConnection.js";


const router = express.Router()

router.post ("/", (req,res)=>{
    console.log ('method: ', req.method)
    let userName = req.body.userName
    let password = req.body.password
    console.log (userName, password)
    res.send("Login request received");
   
})

export default router;