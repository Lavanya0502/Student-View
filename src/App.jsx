import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './modules/student/containers/Register';
import Success from './modules/student/containers/Success';
import AlreadyRegistered from './modules/student/containers/AlreadyRegistered';
import Splash from './modules/student/containers/Splash';
import React from 'react';
import Home from './modules/student/containers/Home';
import QRScanner from './modules/student/containers/QRScanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/already-registered" element={<AlreadyRegistered />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scan" element={<QRScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
