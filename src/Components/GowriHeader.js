import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const GowriHeader = ()=>{
    return(
        <div>
            <Navbar bg="danger" variant="dark" expand="lg" >
            <Navbar.Brand >Yavarum Kelir Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                <Link to='/ykadmin@2609/GowriCard'><Navbar.Text >Add Data</Navbar.Text></Link>
                <Link to='/ykadmin@2609/GowriTable' ><Navbar.Text className='ml-1'>View Data</Navbar.Text></Link>
                <Link to='/ykadmin@2609/Gowriaddadmin' ><Navbar.Text className='ml-1'>Add Admin</Navbar.Text></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}


export default GowriHeader;