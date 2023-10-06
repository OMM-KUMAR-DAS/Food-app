import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='back'>
       
        <Link to="/login"><Button variant="light" className='bt'>Login</Button>{' '}</Link>
        <Link to="/sign"><Button variant="dark" className='bt'>Signup</Button>{' '}</Link>

    </div>
  )
}

export default Home