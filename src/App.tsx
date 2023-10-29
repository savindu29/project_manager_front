import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiniDrawer from './layouts/side-bar'; 
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <MiniDrawer /> {/* Render the menu bar and sidebar */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
