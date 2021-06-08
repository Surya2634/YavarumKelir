import React, {useState} from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import '../css/card.css';
import { useHistory } from 'react-router-dom';


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>


// Hello

const Cards = (props)=>{
    let history = useHistory();
    const [name, setName]= useState();
    const [dob, setDob] = useState();


      function handledata (){
        history.push({
            pathname: '/result',
            state: {ResultData: {Name : name, Dob : dob }}
        });
     };



      return(
        <div >
            <br/><br/>
            <Card className="text-center box" style={{backgroundColor:'#f30866'}}>
                <Card.Body>
                    <Card.Title className='Cardheading'>Yavarum Kelir Result 2021</Card.Title>
                    <Col sm="5" className='textBox'>
                      <Form.Control type="text" required='true' onChange={(event)=> setName(event.target.value)}  name='name' placeholder="பதிவு எண்" className=' mt-5 textBox' />
                      <Form.Control type="date" required='true' onChange={(event)=> setDob(event.target.value)}  name='dob' placeholder="பிறந்த தேதி" className=' mt-5 textBox' />
                    </Col>
                        <p className='mt-5 button'>
                          <Button variant="light" 
                        type='submit' name='submit' onClick={handledata} disabled={!name||!dob}>Get My Mark</Button>
                        </p>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cards;
