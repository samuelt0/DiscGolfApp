import React from 'react';
import Home from "./pages/home";
import Play from "./pages/play";
import Footer from "./pages/common/footer";
import Navbar from "./pages/common/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div> 
      <Navbar />
      <Home /> 
      <Footer />
    </div>
  );
}

export default App;
