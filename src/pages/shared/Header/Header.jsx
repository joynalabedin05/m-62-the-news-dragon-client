import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaMeh } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContex } from '../../../provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContex);
    return (
        <Container>
            <div className='text-center my-3'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex my-4'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70}>
                I can be a React component, multiple React components, or just some text   I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features"> <Link to='/'>Home</Link> </Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                   
                </Nav>
                <Nav>                
                    {user &&  <Nav.Link href="#deets"> <FaMeh></FaMeh> {user.displayName}</Nav.Link>}
                     <Nav.Link eventKey={2} href="#memes">
                    {user?  
                    <Button variant="secondary">logout</Button>:
                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                    }
                     </Nav.Link>              
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </Container>
    );
};

export default Header;