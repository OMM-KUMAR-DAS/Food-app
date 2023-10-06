
const fod=require("../models/food")

exports.getall = async(req,res) => {
        try{

           //get data

            const cate= await fod.find()
            res.status(201).json({
                success:true,
                message:cate
            })
        }
        catch(error){
             res.status(500).send("oops")
        } 
}  