import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {  useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    
    const[details,setd]= useState({Name:"",email:"",Phone:"",city:"",address:"",pin:""})
    const contents= useSelector((state)=>state.cart)
    const navigate=useNavigate()
    let sum=0
    for(let i=0;i<contents.length;i++)
    {
        sum+=contents[i].price
    }

    function handleuser(event)
    {
        setd((prev)=>(
            {
               ...prev,[event.target.name]:event.target.value
            }))
    }

    function check(event)
    {
        event.preventDefault()
        navigate('/Paymethods')
    }

  return (
    <div className='jk'>
        <h2>Checkout</h2>
        <form className='jkl' onSubmit={check}>
                <label>

                        <p>Name<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    name="name"
                                    value={details.name}
                                    onChange={handleuser}
                                    required
                                    placeholder="Name"
                        />

                </label>

                <label>

                        <p>Email<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    name="email"
                                    value={details.email}
                                    onChange={handleuser}
                                    required
                                    placeholder="email address"
                        />

                </label>

                <label>

                        <p>Phone<sup>*</sup></p>



                        <Form.Control
                                    type="number"
                                    id="inputPassword5"
                                    size="md"
                                    name="Phone"
                                    value={details.phone}
                                    onChange={handleuser}
                                    required
                                    placeholder="phone number"
                        />

                </label>

                <label>

                        <p>City<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="md"
                                    name="city"
                                    value={details.city}
                                    onChange={handleuser}
                                    required
                                    placeholder="city"
                        />

                </label>


                <label>

                        <p>Pincode<sup>*</sup></p>



                        <Form.Control
                                    type="number"
                                    id="inputPassword5"
                                    size="md"
                                    name="pin"
                                    value={details.pin}
                                    onChange={handleuser}
                                    required
                                    placeholder="pincode"
                        />

                </label>

                <label>

                        <p>Address<sup>*</sup></p>



                        <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    size="lg"
                                    name="address"
                                    value={details.address}
                                    onChange={handleuser}
                                    required
                                    placeholder="add address"
                        />

                </label>
               <button className='nb'><strong>Checkout{sum}</strong></button>
        </form>

    </div>
  ) 
}

export default Checkout