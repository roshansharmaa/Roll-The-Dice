import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Comp/Home/Home';
import Play from './Comp/play/Play';

function App() {
  return (

    <>
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
<footer>
<div className="social-link-list">
          <a
            href="https://roshan-sharmaa.netlify.app/"
            target="_blank"
            className="social-link"
          >
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </a>
        </div>
</footer>
</>

);
}

export default App;
