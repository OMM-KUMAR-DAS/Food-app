import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { add } from '../store/tokenSlice';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';




const Login = () => {
  
    const navigate= useNavigate();

    const[details,setd]= useState({email:"",password:""})
    
    const dispatch= useDispatch()

    // const ele= useSelector((state)=>state.tok)
    

    function handleuser(event)
    {
      setd((prev)=>(
      {
         ...prev,[event.target.name]:event.target.value
      }))
    }

    function checking(event)
    {

      event.preventDefault()
      
      fetch("http://localhost:8000/api/v1/log",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

      body:JSON.stringify({
         email:details.email,
         password:details.password,
      })
  })

  .then(response=>response.json())

  .then(data=>{
    
            if(data.success)
            {
                toast.success(` ${data.user.name} for authorization`, {
                position: toast.POSITION.TOP_CENTER
              });
                dispatch(add(data))
              console.log(data)
                navigate('/landing')
            }
            else if(!data.success && data.message==="user is not registered"){
              toast.error(`${data.message} sign up first`, {
                position: toast.POSITION.TOP_CENTER
              });
            }
            else if(!data.success && data.message==="password incorrect"){
              toast.success(`${data.message}`, {
                position: toast.POSITION.TOP_CENTER
              });
            }
  
  });
  
    
}


  return (
    
    <div className='for'>
      <div className='con'>
          <form onSubmit={checking} className='form'>

                <h2>Login</h2>
                
                <label>

                            <p>Email<sup>*</sup></p>

                           

                             <Form.Control
                              type="text"
                              id="inputPassword5"
                              size="md"
                              name="email"
                              value={details.role}
                              onChange={handleuser}
                              
                              placeholder="enter email"
                            />
  
                </label>

                           
               <br></br>


                 <label>

                            <p>Password<sup>*</sup></p>
                              
                           

                            <Form.Control
                              type="password"
                              id="inputPassword6"
                              size="md"
                              name="password"
                              value={details.role}
                              onChange={handleuser}
                              className='in'
                              placeholder="enter password"
                            />
  
                </label> 

                           

                <br></br>
                <br></br>
                <br></br>

                <button className='bn'>Login</button>

                 <br></br>
                 <br></br>

                 <div className='klm'>

                    <p>Have an account ?</p>
                    <Link to="/sign"> signup</Link>

                 </div>

                 <div>
                     <Link to='/forget'>forgot password</Link>
                 </div>


          </form>
        </div>   
          
    </div>
  )
}

export default Login