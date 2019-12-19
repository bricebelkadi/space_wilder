import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }

}


export default App;
