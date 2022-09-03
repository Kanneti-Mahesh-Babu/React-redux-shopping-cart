import React from 'react'
import img from './logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../App.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export default function Navbar() {

  const cartCount = useSelector((state)=> state.cartReducer.cartValues.length);
  const priceCount = useSelector((state)=> state.cartReducer.totalPrice);
  return (
    <div>
<nav class="navbar navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={img} alt="logo" width="120" height="50" />
    </a>


    <form className='search' role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>


    
  <button class="btn btn-primary me-md-2 active" type="button">  <Link to="/cart" style={{color:"aliceblue",textDecoration:"none"}}> <ShoppingCartIcon/> {cartCount}</Link> </button>
  <button class="btn btn-primary active" type="button"><CurrencyRupeeIcon/> {priceCount}.00 </button>
  
    
  <i class="fa-regular fa-user"></i>

  </div>
</nav>












    </div>
  )
}
