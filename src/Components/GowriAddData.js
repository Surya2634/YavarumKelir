import React, {useState} from 'react';
import {Card, Button, Col, Form, Row} from 'react-bootstrap';
import '../css/adminCard.css';
import { db } from './firebase.config';

const GowriAddData = ()=>{
   
    let [ registerNumber, setregisterNumber] = useState([]);
    let [ name, setName] = useState([]);
    let [ courseName, setcourseName]= useState([]);
    let [ dob, setdob]= useState([]);
    let [ m1 , setm1] = useState([]);
    let [ m2, setm2]= useState([]);
    let [ m3, setm3]= useState([]);
    let [ total, settotal]= useState([]);
    let [ result, setResult]= useState([]);
   
    const handleSubmit = (event) => {
        event.preventDefault();

        db.collection('YavarumkelirDob').add({
            Name:name,
            registernumber:registerNumber,
            coursename:courseName,
            dateofbirth : dob,
            m1:m1,
            m2:m2,
            m3:m3,
            total:total,
            result:result

        })
        .catch((error)=>{
            alert(error.message);

        });

        setregisterNumber("");
        setName("");
        setcourseName("");
        setm1("");
        setm2("");
        setm3("");
        settotal("");
        setResult("");
    };


    return(
        <div className='admincard'>
            <Card className='none'>
            <Form className='admincard' onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='registernumber'>
                    பதிவு எண் :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="text" 
                    placeholder="Register Number" 
                    name='registerNumber'
                    value={registerNumber} 
                    onChange={(event)=> setregisterNumber(event.target.value)} 
                    required='true'/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='name'>
                    பெயர் :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="text" 
                    placeholder="Name"
                    name='name'
                    value={name} 
                    onChange={(event)=> setName(event.target.value)}
                    required='true' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='name'>
                    பிறந்த தேதி :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="date" 
                    name='name'
                    value={dob} 
                    onChange={(event)=> setdob(event.target.value)}
                    required='true' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='coursename'>
                    வகுப்பு :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="text" 
                    placeholder="Course Name" 
                    name='courseName'
                    value={courseName} 
                    onChange={(event)=> setcourseName(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='m1'>
                    கருத்தியல் தேர்வு :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="number" 
                    placeholder="Out of 70" 
                    name='m1'
                    value={m1} 
                    onChange={(event)=> setm1(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='m2'>
                    செய்முறை தேர்வு  :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="number" 
                    placeholder="Out of 20" 
                    name='m2'
                    value={m2} 
                    onChange={(event)=> setm2(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='m3'>
                    வருகைப்பதிவு :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="number" 
                    placeholder="Out of 10" 
                    name='m3'
                    value={m3} 
                    onChange={(event)=> setm3(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='total'>
                    மொத்த மதிப்பெண்கள் :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="number" 
                    placeholder="Out of 100" 
                    name='total'
                    value={total} 
                    onChange={(event)=> settotal(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group><Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className='result'>
                    தேர்ச்சி நிலை :
                    </Form.Label>
                    <Col sm="7">
                    <Form.Control 
                    type="text" 
                    placeholder="Pass / Fail" 
                    name='result'
                    value={result} 
                    onChange={(event)=> setResult(event.target.value)}
                    required='true'/>
                    </Col>
                </Form.Group>
                <Button variant="danger" type='submit'>
                    Add Data
                </Button>
            </Form><br/>
            </Card>
        </div>
    )
}


export default GowriAddData;