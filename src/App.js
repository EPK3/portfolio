import React, { Component } from 'react';
import About from './Components/About';
import Banner from './Components/Banner';
import Experience from './Components/Experience';
import Break from './Components/Break';

class App extends Component {
  render(){
  return (
    <div>
      <Banner/>
      <About/>
      <Experience/>
      <Break/>
    </div>
  );
  }
}

export default App;
