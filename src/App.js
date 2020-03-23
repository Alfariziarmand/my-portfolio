import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'
import Main from './component/home/Main'
import Dashboard from './component/dashboard/Dashboard'
import './App.css';
import wa from './img/wa-icon.png';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/'component={Main} />
          <Route exact path='/mastermartabak' component={Dashboard} />
        </Switch>
        <Footer />
        <a href="https://api.whatsapp.com/send?phone=6282198427558&text=Saya%20tertarik%20dengan%20martabak%20jepang%20jony&source=&data=" target="_blank" rel="noopener noreferrer" className="wa-link">
          <img src={wa} alt="wa"/>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
