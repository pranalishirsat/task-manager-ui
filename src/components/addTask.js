import '../css/addTask.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from '../api/axios';

function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/tasks', { title, description, dueDate, priority, status }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('Low');
            setStatus('To Do');
            alert('Task added successfully');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="display-4">Add New Task</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTaskTitle" className="form-group">
                            <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formTaskDescription" className="form-group">
                            <Form.Control type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formDueDate" className="form-group">
                            <Form.Control type="date" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formPriority" className="form-group">
                            <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formStatus" className="form-group">
                            <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Add Task</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTask;