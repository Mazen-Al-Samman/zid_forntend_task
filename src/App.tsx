import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Payment from "./components/Payment";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/payment" element={<Payment/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
