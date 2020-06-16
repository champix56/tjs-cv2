import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Mainapp from './components/Mainapp/Mainapp';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <Navbar></Navbar>
     <Mainapp></Mainapp>
     <Footer></Footer>
    </div>
  );
}

export default App;
