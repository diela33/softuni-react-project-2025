import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<div>Login Page</div>} />
                <Route path="/register" element={<div>Register Page</div>} />
                <Route path="/recipes" element={<div>Recipes Page</div>} />
            </Routes>
        </Router>
    );
}

export default App;

