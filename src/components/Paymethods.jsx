import React from 'react'
import { useState } from 'react';
import {  useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';

const Paymethods = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const contents= useSelector((state)=>state.cart)
  
  let sum=0
  for(let i=0;i<contents.length;i++)
  {
      sum+=contents[i].price
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='pay'>
        <h3>Payment options available</h3>
            <div className='lis'>
                <label>
                        <input
                          type="radio"
                          value="UPI"
                          checked={selectedOption === 'UPI'}
                          onChange={handleOptionChange}
                        />
                        <strong>UPI</strong>
                        <p>Pay by any UPI app</p>
                </label>
                
                {/* <Carousel>
                      <Carousel.Item interval={600}>


                       
                          
                       <img src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo-tumb.png" className='d-block' alt=" " />

                       
                      </Carousel.Item>
                      <Carousel.Item interval={900}>
                         

                        
                          
                          <img src="https://www.fintechfutures.com/files/2023/01/phonepe-logo-icon-180x180.jpg" className='d-block' alt=" " />

                        
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        

                        
                         
                      <img src="https://www.interviewchacha.com/images/company_logos/paytm.jpg" className='d-block' alt=" " />

                       
                      </Carousel.Item>
                </Carousel> */}

                <br></br>

                <label>
                        <input
                          type="radio"
                          value="Card"
                          checked={selectedOption === 'Card'}
                          onChange={handleOptionChange}
                        />
                        <strong>Credit/Debit/ATM card</strong>
                        <p>Add and secure your card as per RBI guidelines</p>
              </label>

              <br></br>

              <label>
                        <input
                          type="radio"
                          value="Cash"
                          checked={selectedOption === 'Cash'}
                          onChange={handleOptionChange}
                        />
                        <strong>Cash on delivery</strong>
                        {
                          selectedOption==='Cash'&&<p>Due to handling costs,a nominal fee of Rs5 will be charged</p>
                        }
                        
                        
              </label>
          </div>
      <hr className='hr1'></hr>

      <div className='lis_1'>

                    <h4>Price Details</h4>

                    <hr className='hr1'></hr>

                    <p>Price({contents.length} item)</p>&#8377;
                    {
                      selectedOption==='Cash' ? sum+=5:sum
                    }

                    <br></br>

                    <p>Delivery Charges</p>
                    {
                      sum>=300 ? <p>Free</p>:<p>&#8377; 40</p>
                    }

                    <hr className='hr1'></hr>
                    
                    <p>Amount Payable</p>&#8377;{sum>=300?sum:sum+40}
      </div>              

        <hr className='hr1'></hr>
        <hr className='hr1'></hr>

         {/* <div className='logo'>

                <div>

                  <img src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-original-product-badge-in-vintage-flat-design-png-image_6522881.png" alt=""/>

                </div>

                <div>

                  <img src="https://cdn.vectorstock.com/i/preview-1x/00/27/secure-payment-shield-with-tick-mark-icon-vector-47880027.jpg" alt=""/>

                </div>


                

        </div> */}

      

     <hr class="hr1" />

      <div className='place'>
        <p>&#8377;{sum>=300?sum:sum+40}</p>
        <Button variant="warning">Place Order</Button>{' '}
      </div>
   

    </div>
  )
}

export default Paymethods