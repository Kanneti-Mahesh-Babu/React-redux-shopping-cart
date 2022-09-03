import React from 'react'
import Pic from './Components/logo.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';




function UserAuth() {
    const [user,setUser]=useState({
        fname:'',
        password:''
    })
    const {fname,password}=user;
const handleChange = e =>{
    setUser({...user,[e.target.name]:e.target.value});
}


  return (
    <div>
            <Form style={{margin:"auto",padding:"60px",width:"500px",marginTop:"80px",border:"1px solid grey",borderRadius:"10px"}}>
                <img src={Pic} style={{width:"80px",height:"50px",marginLeft:"150px",borderRadius:"15%",boxShadow:"1px 1px 5px grey"}}/><br/><br/><hr/><br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="fname" value={fname} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <br/>
      <Button variant="primary"> Sign In </Button>{' '}
      <Button variant="success" style={{float:"right"}}> Sign Up </Button>
    </Form>
      
    </div>
  )
}

export default UserAuth();