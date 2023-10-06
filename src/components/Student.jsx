
import { useEffect,useState } from 'react'; 
import { useDispatch, useSelector} from 'react-redux';
import { addd } from '../store/cartSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {AiOutlineShoppingCart} from 'react-icons/bs'



const Student = () => {

    const dispatch= useDispatch();
    const gg=useSelector((state)=>state.cart)
    const contents= useSelector((state)=>state.cart)
    const[fod,setf]=useState([''])
    console.log(contents)
    
    

   useEffect(()=>{
       async function getfoods()
       {
        const response= await fetch('http://localhost:8000/api/v2/getal',{
            method:'GET',
            headers:{
              "Content-Type":"application/json",
            },
        })

         const dat= await response.json();
          setf(dat.message)
      }
      
      getfoods()
      
    },[])
    
     console.log(gg)
 
    const adding=(fod)=>{

      for(let i=0;i<contents.length;i++)
      {
        if(fod._id===contents[i]._id)
        {
          return  toast.success(`item already added`, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }
      dispatch(addd(fod))
      toast.success(`item added`, {
        position: toast.POSITION.TOP_CENTER
      });
    }
    
   
  
  return (
    <div>
               <Navbar expand="sm" className="bg-body-tertiary">
                  <Container>
                    <Navbar.Brand href="#home">Foodizz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#link">Home</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                    
                  </Container>
               </Navbar>
               
               <Link to="/cart"><Button variant="light" className='bt'>cart</Button>{' '}</Link>
               
               <div>


                 

                     <Row xs={1} md={3} className="g-1">

                              {fod.map((fod, index) => (
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
                                    <button onClick={()=>adding(fod)}>Add food</button>

                                  </Card>
                                </Col>
                                ))}
                      </Row> 
                    
                  
               </div>
    </div>
  )
}

export default Student