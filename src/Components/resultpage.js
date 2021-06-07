import React, { useState,useEffect}from 'react';
import { Table, Button } from 'react-bootstrap';
import '../css/resultpage.css';
import firebase from './firebase.config';
import { useLocation } from "react-router-dom";
  

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

const Result = ()=>{
    const location = useLocation();

    const [yavarum, setvalue] = useState([]);
    const [loading, setloading] = useState(false);

     
    const ref = firebase.firestore().collection("YavarumkelirDob");
    
    function print(){
        window.print();
    }
    
    function getdata(){
        setloading(true);
        console.log(location.state.ResultData)
        ref.where("registernumber", "==", location.state.ResultData.Name).where("dateofbirth", "==", location.state.ResultData.Dob).onSnapshot((querySnapshot) =>{
            const items  = [];
            querySnapshot.forEach((docs)=>{
                items.push(docs.data());
            });
            setvalue(items);
            setloading(false);
        })
    }

    useEffect(()=>{
        getdata();
    }, []);

    if (loading){
        return <h1>Loading... </h1>
    }

    return(
        <div className='table'>
            <Table striped bordered hover id='ResultTable' >
                <tbody>
                   <tr>
                        {yavarum.map((element) => (
                        <th>பதிவு எண் : {element.registernumber}</th>
                        ))}
                    </tr>
                    <tr>
                        {yavarum.map((element)=> (
                        <th>பெயர் : {element.Name} </th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>பிறந்த தேதி  : {element.dateofbirth} </th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>வகுப்பு : {element.coursename}</th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>கருத்தியல் தேர்வு : {element.m1} / 70</th>
                        ))}
                    </tr>  
                    <tr>
                        {yavarum.map((element)=> (
                        <th>செய்முறை தேர்வு: {element.m2} / 20</th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>வருகைப்பதிவு : {element.m3} / 10</th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>மொத்த மதிப்பெண்கள் : {element.total} / 100</th>
                        ))}
                    </tr> 
                    <tr>
                        {yavarum.map((element)=> (
                        <th>தேர்ச்சி நிலை : {element.result}</th>
                        ))}
                    </tr>    
                </tbody>
            </Table>
            <Button variant="danger" onClick={print}>Print</Button>{' '}
        </div>
    )
}

export default Result;