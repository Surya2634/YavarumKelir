import React,{useState, useContext, useEffect} from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import '../css/card.css';
import { Link } from 'react-router-dom';
import { StateContext } from './stateProvider';

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>


const Cards = (props)=>{
    const [Globalname, setGlobalName]= useContext(StateContext);
    

      const handleinput = (event)=>{
        setGlobalName({name : event.target.value})
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(Globalname);
      }

      return(
        <div >
            <br/><br/>
            <form onSubmit={handleSubmit} >
            <Card className="text-center box" style={{backgroundColor:'#f30866'}}>
                <Card.Body>
                    <Card.Title className='Cardheading'>Yavarum Kelir Result 2021</Card.Title>
                    <Col sm="5" className='textBox'>
                        <Form.Control type="text" required='true' onChange={handleinput} name='name' placeholder="பதிவு எண்" className=' mt-5 textBox' />
                    </Col>
                    <Link
                        to={{
                          pathname: "/result"
                        }}
                      >
                        <p className='mt-5 button'>
                          <Button variant="light" 
                        type='submit' name='submit' >Get My Mark</Button>
                        </p>
                    </Link>
                </Card.Body>
            </Card>
            </form>
        </div>
    )
}


export default Cards;