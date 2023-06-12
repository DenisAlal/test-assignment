import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Home from './pages/home'
import Create from './pages/create'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
