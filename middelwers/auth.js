const jwt=require("jsonwebtoken")


require("dotenv").config()

exports.auth=(req,res,next) =>{
    try{

        
        const token= req.body.token

        
        console.log(token)

        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"token missing",
            })
        }

        //verify the token

        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET)  
            
            console.log(decode)
            //storing the payload in req.user
            req.cl=decode
        }catch(error)
        {
            return res.status(401).json({
                success:false,
                message:"token is invalid",
            })
        }
        next()

    }catch(error)
    { 
          return res.status(401).json({
            success:false,
            message:"something is wrong"
          })
    }
}
//USED FOR AUTHORIZATION


exports.isStudent=(req,res,next)=>{
    try{
        if(req.cl.role !="Student")
        {
            return res.status(401).json({
                success:false,
                message:"entry restricted"
            })
        }
        next();

    }catch(error)
    {
        return res.status(500).json({
            
            success:false,
            message:"user role cannot be verified"


        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.cl.role !="Admin")
        {
            return res.status(401).json({
                success:false,
                message:"entry restricted"
            })
        }
        next()

    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified"


        })
    }
}