import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

import '../css/tasksList.css';


function MyTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/tasks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return ( 
        <Container className="tasks-list">
            <h2 className="display-5">My Tasks</h2>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroupItem key={task._id} className="task-item">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                        <p><strong>Due Date:</strong> {task.dueDate}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <p><strong>Status:</strong> {task.status}</p>
                   </ListGroupItem>
                ))}
            </ListGroup>
        </Container>

        
    );
}

export default MyTasks;
