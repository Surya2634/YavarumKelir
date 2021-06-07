import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Head = ()=>{
    return(
        <>
        <Navbar bg="danger" variant="dark" expand="lg" >
            <Navbar.Brand >Yavarum Kelir Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to='/ykadmin@oct2020' type="radio" ><Navbar.Text >Add Data</Navbar.Text></Link>
                <Link to='/ykadmin@oct2020/admintable' type="radio" ><Navbar.Text className='ml-1'>View Data</Navbar.Text></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Head;