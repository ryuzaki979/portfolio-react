import React from "react";

import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element= {<Home/>} />
        <Route exact path = "/projects" element= {<Projects/>} />
        <Route exact path = "/contact" element= {<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
