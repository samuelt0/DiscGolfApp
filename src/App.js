import React from 'react';
import Navbar from './pages/navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home";
import Play from "./pages/play";
import Footer from "./pages/footer";
import NoPage from './pages/nopage';

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/practice" element = {<NoPage />} />
        <Route path="/sign-up" element = {<sign-up />} />
      </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App;


/*
import React from 'react';
import Home from "./pages/home";
import Play from "./pages/play";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";
import NoPage from './pages/nopage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar> </Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element = {<NoPage />} />
      </Routes>
      </BrowserRouter>
      <Footer> </Footer>
    </div>
  );
}

export default App;
*/