import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiniDrawer from './layouts/side-bar'; // Provide the correct relative path
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <MiniDrawer /> {/* Render the menu bar and sidebar */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
