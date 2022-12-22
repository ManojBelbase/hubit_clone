import React from 'react';
// import './App.css';
import Toolbar from "./Component/Navigation/Toolbar"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Library from './Component/pages/Library';

function App() {
  return (
    <div>
      <Router>
         <Toolbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>} />
          <Route path='/contact'  exact element={<Contact/>} />
          <Route path='/library' exact element={<Library/>}/>

        </Routes>
      </Router>
   </div>
  );
}

export default App;
