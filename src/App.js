

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import MyTasks from './components/myTasks.js'; // Import MyTasks component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/mytasks" element={<MyTasks />} /> {/* Add MyTasks route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;