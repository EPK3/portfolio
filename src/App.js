import React, { Component } from 'react';
import About from './Components/About';
import Banner from './Components/Banner';
import Experience from './Components/Experience';
import Break from './Components/Break';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Banner />
          <About />
          <Experience />
          <Break />
          <Portfolio />
          <Contact />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
