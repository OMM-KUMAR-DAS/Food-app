import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  useSelector,useDispatch } from 'react-redux'
import { rem } from '../store/cartSlice';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Cart = () => {

  const dispatch=useDispatch()
  const contents= useSelector((state)=>state.cart)
  console.log(contents)
   
  const deletee= (id)=>{
        
        dispatch(rem(id))
        toast.error(`item deleted`, {
          position: toast.POSITION.TOP_CENTER
        });
        
  }

  

  return (
    <div>
                            <Row xs={1} md={3} className="g-1">

                                          {contents.map((fod, index) => (
                                            <Col key={fod._id}>
                                              <Card>
                                                <Card.Img variant="top" src={fod.image}/>
                                                <Card.Body>
                                                  <Card.Title>{fod.title}</Card.Title>
                                                  <Card.Text>
                                                    {fod.des}
                                                  </Card.Text>
                                                </Card.Body>
                                                <button>price:{fod.price}</button>
                                                <button onClick={()=>deletee(fod._id)} >Remove</button>

                                              </Card>
                                            </Col>
                                            ))}
                             </Row> 
                            

                             <Link to="/check"><Button variant="warning" >place order</Button>{' '}</Link>



       
    </div>
  )
}

export default Cart