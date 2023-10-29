
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiniDrawer from './layouts/side-bar'; // Import the sidebar component
import './App.css';
import MiniDrawer from './layouts/side-bar';

function App() {
  return (
    <div >
      <MiniDrawer/>
    </div>
  );
}

export default App;
