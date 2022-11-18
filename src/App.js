import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from "./components/Contact"

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/footer.scss"
import "./styles/home.scss"
import "./styles/Contact.scss"


function App() {
  return (
    <Router >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </Router >
  );
}

export default App;
