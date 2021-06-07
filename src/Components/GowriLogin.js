import React from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login = ()=>{
    return(
        <div >
          <Card className='card'>
              <Card.Title className='mt-5'> Main Admin Login</Card.Title>
            <Form className='admincard'>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='username'>
                    User Name :
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="User Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='password'>
                    Password :
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="text" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Link to='/ykadmin@2609/GowriCard'>
                    <Button variant="danger" >
                        Submit
                    </Button>
                </Link>
            </Form><br/>
            </Card>
        </div>
    )
}


export default Login;