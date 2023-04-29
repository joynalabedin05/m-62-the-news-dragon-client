import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContex);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email, password)
        .then(result=>{
            const createdUser= result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <Container className='w-25 mt-4 mx-auto'>
        <h4>Please Register</h4>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required/>          
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo url" required/>          
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>          
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='accept' label="Accept terms & conditions" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
            Already have an account? <Link to='/login'>Login</Link>
            </Form.Text>
            <Form.Text className="text-success">
            
            </Form.Text>
            <Form.Text className="text-danger">
            
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;