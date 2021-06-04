import React, {useState} from 'react';
import {Card, Button, Col, Form, Row, InputGroup, FormControl} from 'react-bootstrap';
import '../css/GowriAddAdmin.css'
import { db } from './firebase.config';

const GowriAddAdmin = ()=>{

    let [ username, setusername] = useState([]);
    let [ password, setpassword] = useState([]);
    
   
    const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('YavarumkelirAdmin').add({
            username:username,
            password :password
        })
        .catch((error)=>{
            alert(error.message);

        });

        setusername("");
        setpassword("");
        
    };
    return(
        <div>
             <Card className='none'>
            <Form className='admincard' onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='username'>
                    User Name :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control type="text" 
                    placeholder="Username" 
                    name='username'
                    value={username} 
                    onChange={(event)=> setusername(event.target.value)} 
                    required='true' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='password'>
                     Password :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="text" 
                    placeholder="password" 
                    name='password'
                    value={password} 
                    onChange={(event)=> setpassword(event.target.value)} 
                    required='true' />
                    </Col>
                </Form.Group>
                <Button variant="danger" type='submit'>
                    Add Admin
                </Button>
            </Form><br/>
            </Card>
        </div>
    )
}



export default GowriAddAdmin;