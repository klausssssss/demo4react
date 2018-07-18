
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import service from './common/service/service'
class App extends Component {
  constructor(){
    super();
  }
  download = () =>{
    let data = {name:"123"}
    service.Giveg(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.download()}>点击下载
        </button>
      </div>
    );
  }
}

  

export default App;
