import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count : 0
    }
  }

  plusOne = () => {
    this.setState({count : this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        <Navbar count={this.state.count}/>
        <Main countUp={this.plusOne}/>
      </div>
    );
  }

}


export default App;
