import '../css/signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import axios from '../api/axios';
import { FaUserPlus } from 'react-icons/fa';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users', { name, email, password, age });
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.code === 11000) {
                setErrorMessage('This email is already in use. Please try a different email.');
            } else {
                setErrorMessage('Signup failed. Please try again.');
            }
            console.error('Signup failed:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="display-4"><FaUserPlus className="icon" />Signup</h1>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicAge">
                            <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Signup</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
