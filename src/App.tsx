import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Projects from "./pages/projects";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/project"} element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;