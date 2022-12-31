import React from "react";
// import './App.css';
// import Toolbar from "./Component/Navigation/Toolbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/pages/Home/index";
import About from "./Component/pages/About";
import Contact from "./Component/pages/contact"
import Library from "./Component/pages/library/Library";
import Layout from "./HOC/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/library" exact element={<Library />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
