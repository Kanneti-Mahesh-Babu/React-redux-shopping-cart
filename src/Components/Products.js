import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../mobiles.json';
import { useDispatch } from 'react-redux';
import { incrementcart,decrementcart } from '../Redux/Reducers/CartReducer';




export default function Products() {
  const dispatch = useDispatch();

  return (
    <div>
        
        {data.map((mobile)=><div key={mobile.id}>
    <Card style={{ width: '16rem',margin:"55px",padding:"10px",float:"left",height:"26rem" }}>
      <Card.Img variant="top" src={'./mobiles/'+mobile.image }  style={{width:"190px",height:"220px",margin:"auto"}}/>
      <Card.Body>
        <Card.Title style={{fontSize:"15px"}}>{mobile.name}</Card.Title>
        <Card.Text>
                 ₹ {mobile.price}.00
        </Card.Text>

        <Button variant="primary" onClick={()=>dispatch(incrementcart({
          productName:mobile.name,
          productPrice:mobile.price,
          productImage:mobile.image
        }))}> Add to Cart </Button>
        <Button variant="danger" style={{float:"right"}} onClick={()=>dispatch(decrementcart({
          productName:mobile.name,
          productPrice:mobile.price,
          productImage:mobile.image
        }))}> Remove </Button>

      </Card.Body>
    </Card>
    </div>)}
</div>
  )
}
