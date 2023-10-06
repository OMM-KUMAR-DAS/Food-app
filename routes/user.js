const express=require("express")
const router=express.Router()
// const User=require("../models/signup")

const{signup,login} = require("../controllers/Auth")
const{auth,isStudent,isAdmin}=require("../middelwers/auth")
const{valiemail}= require("../controllers/validateemail")

router.post("/signupp",signup)
router.post("/log",login)

//Protected routes

router.post("/student",auth,isStudent,(req,res) =>
{ 
    
    res.status(200).json({
        success:true,
        message:"Welcome to the food app", 
    })
})

router.post("/admin",auth,isAdmin,(req,res) =>{
    res.json({
        success:true,
        message:"welcome Admin"
    })
})

router.get("/vali",valiemail)



module.exports=router;