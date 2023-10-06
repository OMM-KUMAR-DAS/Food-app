import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    
    const navigate=useNavigate()
    const[details,setd]=useState({name:"",email:"",password:"",role:""})
    
    function handleuser(event)
    {
      setd((prev)=> (
      {
         ...prev,[event.target.name]:event.target.value
      }))
    }
    
    function checking(event)
    {
      event.preventDefault()
      
      fetch("http://localhost:8000/api/v1/signupp",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

      body:JSON.stringify({
         name:details.name,
         email:details.email,
         password:details.password,
         role:details.role
      })
  })
  .then(response=>response.json())

  .then(data=>{
    
            if(data.success)
            {
                toast.success("Account created successfully", {
                position: toast.POSITION.TOP_CENTER
              });
                navigate('/Login')
            }
            else{
              toast.success("user already existed click the link below to login", {
                position: toast.POSITION.TOP_CENTER
              });
            }
  
  });
  
 }

  return (
    <div className='fo'>
          <div className='cont'>

               <form onSubmit={checking} className='form'>

                      <h2>SIGN UP</h2>
                      
                      <label>

                             <p>Name<sup>*</sup></p>

                            {/* <input

                              required
                              type= "text"
                              name= "name"
                              value={details.name}
                              onChange= {handleuser}
                              // className="in"
                              placeholder= "enter name"
                              
                              /> */} 

                              <Form.Control
                              type="text"
                              required
                              size="md"
                              name="name"
                              value={details.name}
                              onChange={handleuser}

                              placeholder="enter name"
                            />

                      </label>

                      <br></br>

                 <label>

                            <p>Email<sup>*</sup></p>

                            {/* <input

                              required
                              type= "text"
                              name= "email"
                              value= {details.email}
                              onChange= {handleuser}
                              // className="in"
                              placeholder= "enter email"
                              
                              /> */}


                             <Form.Control
                              type="text"
                              required
                              size="md"
                              name="email"
                              value={details.email}
                              onChange={handleuser}

                              placeholder="enter email"
                            />

                              

                 </label>
                  
                  <br></br>

                 <label>

                        <p>Password<sup>*</sup></p>

                        {/* <input

                          required
                          type="text"
                          name="password"
                          value={details.password}
                          onChange={handleuser}
                          // className="in"
                          placeholder="enter password"
                          
                          /> */}
                        

                        <Form.Control
                              type="text"
                              required
                              size="md"
                              name="password"
                              value={details.password}
                              onChange={handleuser}

                              placeholder="enter password"
                            />




                 </label>


                 <br></br>


                 <label>

                        <p>Role<sup>*</sup></p>

                        {/* <input

                          required
                          type="text"
                          name="role"
                          value={details.role}
                          onChange={handleuser}
                          // className="in"
                          placeholder="enter signup type"
                          
                          /> */}


                              <Form.Control
                              type="text"
                              required
                              size="md"
                              name="role"
                              value={details.role}
                              onChange={handleuser}

                              placeholder="enter role"
                            />

                          
                          
                 </label>

                 <br></br>
                 <br></br>
                 <br></br>

                 <button className='bn'>Submit</button>

                  <br></br>


                  <div className='klm'>

                          <p style={{color:"white"}}>Already an user ?</p>
                          <Link to="/sign" style={{color:"blue"}}>Login</Link>

                  </div>

                 

                    
               </form>
      </div>        
           
    </div>
  )
}

export default Signup