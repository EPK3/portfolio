import React, { Component } from 'react';
import About from './Components/About';
import Banner from './Components/Banner';
import Experience from './Components/Experience';
import Break from './Components/Break';
import Portfolio from './Components/Portfolio';

class App extends Component {
  render(){
  return (
    <div>
      <Banner/>
      <About/>
      <Experience/>
      <Break/>
      <Portfolio/>
    </div>
  );
  }
}

export default App;
