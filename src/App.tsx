import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Create from './pages/Create'
import {Provider} from "react-redux"
import store from './store/store'


function App() {
    return (
         <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                </Routes>
            </BrowserRouter>
         </Provider>
    );
}

export default App;
