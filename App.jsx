import React from 'react';
import logo from './assets/Cupcake.png'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CakeList from './components/CakeList';
import CakeDetails from './components/CakeDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header"/>
        <img src={logo} alt='Cupcake.png'/>
        <Routes>
          <Route path="/" element={<CakeList />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
