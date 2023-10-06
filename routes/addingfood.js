const express=require("express")
const router=express.Router()

const{addfoods} = require("../controllers/addfood")

const{getbycate} = require("../controllers/getbycategory")

const{getall} = require("../controllers/getallfood")

const{getbychoice} = require("../controllers/veg_non")

//route for adding food
router.post("/addfood",addfoods)

//route for getting food by category

router.get("/getby",getbycate)

//route for getting all foods details

router.get("/getal",getall)

//route for getting food by choice

router.get("/getchoice",getbychoice)

module.exports=router;