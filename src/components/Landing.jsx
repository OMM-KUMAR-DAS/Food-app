import React from 'react'

import { useSelector } from 'react-redux';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from 'react-router-dom';
 

const Landing = () => {

  const ele= useSelector((state)=>state.tok)
  const navigate= useNavigate()
  console.log(ele[0].token)
  function handelclient()
  {

          fetch("http://localhost:8000/api/v1/student",{

          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },
         
            body:JSON.stringify({

              token:ele[0].token,
             
           })
          
      })

      .then(response=>response.json())

      .then(data=>{console.log(data)
        
                if(data.success)
                { 
                  toast.success(`Welcome ${ele[0].user.name}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                    navigate('/student')
                }
                else {
                  toast.error(`${data.message}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                }
               
      
      });
  }

  function handeladmin()
  {

          fetch("http://localhost:8000/api/v1/admin",{

          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },
         
            body:JSON.stringify({

              token:ele[0].token,
             
           })
          
      })

      .then(response=>response.json())

      .then(data=>{console.log(data)
        
                if(data.success)
                { 
                    toast.success(` Welcome ${ele[0].user.name}`, {
                      position: toast.POSITION.TOP_CENTER
                    });
                    navigate('/admin')
                }
                else {
                  toast.error(`${data.message}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                }
               
      
      });
  }



  return (
    <div className='land'>
           <button onClick={handeladmin} className='b' >Admin</button>
           <button onClick={handelclient} className='b'>Student</button>
    </div>
  )
}

export default Landing

