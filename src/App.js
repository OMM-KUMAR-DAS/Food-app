import {  Routes,Route } from 'react-router-dom';
import Home from './components/Home'

import Signup from './components/Signup'

import Login from './components/Login'


import Landing from './components/Landing'

import Admin from './components/Admin'

import Student from './components/Student'

import Cart from './components/Cart'

import Checkout from './components/Checkout'


import Paymethods from './components/Paymethods';

import Forgot from './components/Forgot';

import { ToastContainer } from 'react-toastify';

 
import './App.css';

function App() {
  return (
    
    <div>

         <Routes>

               <Route path='/' element={<Home/>}></Route>
               <Route path='/sign' element={<Signup/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/landing' element={<Landing/>}></Route>
               <Route path='/admin' element={<Admin/>}></Route>
               <Route path='/student' element={<Student/>}></Route>
               <Route path='/cart' element={<Cart/>}></Route>
               <Route path='/check' element={<Checkout/>}></Route>
               <Route path='/forget' element={<Forgot/>}></Route>
               <Route path='/paymethods' element={<Paymethods/>}></Route>
               
         </Routes>

         <ToastContainer/>
      
    </div>
  );
}

export default App;
