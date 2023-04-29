import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContex } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContex);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Link to='/category/0'>Home</Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                   
                </Nav>
                <Nav>                
                    {user &&  <div>
                        <FaUserCircle></FaUserCircle>
                        <span className='mx-2'>{user?.displayName}</span>
                    </div> }

                    {user?  
                    <Button onClick={handleLogOut} variant="secondary">logout</Button>:
                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                    }
                            
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;