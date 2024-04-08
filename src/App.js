import React from 'react';
import Navbar from './pages/navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home";
import Play from "./pages/play";
import Footer from "./pages/footer";
import NoPage from './pages/nopage';
import Practice from './pages/practice'
import MillBrook from './pages/courses/millbrook'
import Scarboro from './pages/courses/scarboro'
import Rockfield from './pages/courses/rockfield'
import Churchville from './pages/courses/churchville'
import CMilton from './pages/courses/cmilton'
import Loginx from './pages/loginsignup';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
        <Route path="/practice" element = {<Practice />} />
        <Route path="/login" element = {<Loginx />} />
        <Route path="/millbrook" element = {<MillBrook />} />
        <Route path="/scarboro" element = {<Scarboro />} />
        <Route path="/rockfield" element = {<Rockfield />} />
        <Route path="/churchville" element = {<Churchville />} />
        <Route path="/cmilton" element = {<CMilton />} />
        <Route path="*" element = {<NoPage />} />
      </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App;
