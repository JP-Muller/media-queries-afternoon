import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'

class App extends Component {
  constructor() {
    super()
    this.dropdown = React.createRef()
  }

  flipShow = () => {
    console.log(this.dropdown.current);
    let { current } = this.dropdown;
    if (current.classList.contains('show-animation')) {
      current.classList.add('hide-animation');
      current.classList.remove('show-animation');
    } else {
      current.classList.add('show-animation');
      current.classList.remove('hide-animation');
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Services />
        <Portfolio />



      </div>
    );
  }
}

export default App;
