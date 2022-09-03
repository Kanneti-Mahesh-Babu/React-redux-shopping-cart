import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { decrementcart } from '../Redux/Reducers/CartReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';




export default function CartList() {
  const cartCount = useSelector((state)=> state.cartReducer.cartValues);
  console.log(cartCount)

  const dispatch=useDispatch();

  const placeOrder=()=>{
      alert("Order Successfully Placed!"); 
  }

  return (
    <div id="clist">
      
      {cartCount.length===0?<h1>Your Cart is Empty!</h1>:
      
      cartCount.map((list,index) =><div key={index}>

      <Card style={{ width: '15rem', height:'19rem', margin:"15px", padding:"15px" }}>
      <Card.Img variant="top" src={'./mobiles/'+list.productImage} style={{height:"100px",width:"100px"}}/>
      <Card.Body>
        <Card.Title style={{fontSize:"15px"}}>{list.productName}</Card.Title>
        <Card.Text>
          ₹ {list.productPrice}.00
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(decrementcart({
          productName:list.productName,
          productPrice:list.productPrice,
          productImage:list.productImage
        }))}> Remove </Button>
      </Card.Body>
    </Card>
    </div>)}


    {cartCount.length===0?null:

    <Form style={{float:"right",position:"relative",bottom:"400px",marginRight:"150px",border:"1px solid grey",padding:"40px",paddingRight:"80px",borderRadius:"5px"}}>
              <h2 style={{textAlign:"center"}}> Add a Delivery Address </h2><br/>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Fullname </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Full Name" style={{width:"380px"}} id="fname"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label> Mobile Number </Form.Label>
        <Form.Control type="number" placeholder="Enter Your Mobile Number" id="mobile"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label> Flat, House no., Building, Company, Apartment </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" style={{width:"380px"}} id="address"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicArea">
        <Form.Label> Area, Street, Sector, Village </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Area" id="address1"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLandmark">
        <Form.Label> Landmark </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Area Landmark" id="address2"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTownCity">
        <Form.Label> Town/City </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Town/City" id="city"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPincode">
        <Form.Label> Pincode </Form.Label>
        <Form.Control type="number" placeholder="6 digits [0-9] PIN code" id="pincode"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Label> State </Form.Label>
        <Form.Control type="text" placeholder="Enter Your State" id="state"/>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Order checkout" id="terms"/>
      </Form.Group>

      <Button variant="primary" type="submit"  style={{float:"right"}} onClick={placeOrder}>
        Proceed to Buy
      </Button>
    </Form>}
  


   

    </div>
  )
}
