import '../css/dashboard.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AddTask from './addTask';
//import TasksList from './tasksList'; // A new component to list tasks

function Dashboard() {
    const [isAddingTask, setIsAddingTask] = useState(false); // State to manage adding task
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        navigate('/'); // Redirect to Home page
    };

    const handleAddTaskClick = () => {
        setIsAddingTask(true); // Show AddTask component
    };

    const handleTaskAdded = () => {
        setIsAddingTask(false); // Hide AddTask component after task is added
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    {!isAddingTask && <h1 className="display-4">Dashboard</h1>}
                    <div className="button-group">
                        <Button variant="primary" onClick={handleAddTaskClick}>Add New Task</Button>
                        <Link to="/mytasks">
                            <Button variant="info">My Tasks</Button>
                        </Link>
                        <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                    {isAddingTask && <AddTask onTaskAdded={handleTaskAdded} />}
                    {/* <div className="tasks-list">
                        <TasksList />
                    </div> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
