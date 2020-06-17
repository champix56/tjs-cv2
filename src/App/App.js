import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Mainapp from './components/Mainapp/Mainapp';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Banner></Banner>
        <Navbar></Navbar>
        <Mainapp></Mainapp>
        <Footer></Footer>
      </div>
    </Router>
  );

}

export default App;
