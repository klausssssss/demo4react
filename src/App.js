
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import
class App extends Component {
  
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
        <button onClick={()=>this.download("http://localhost:53026/UserManagement/Giveg")}>点击下载
        </button>
      </div>
    );
  }

  download = (url) => {
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
          'Accept': 'application/json'
      }   
  }).then(result => {
      // 在此处写获取数据之后的处理逻辑
         console.log(result);
         let url = window.URL.createObjectURL(new Blob([result]));
         let link = document.createElement('a');
         link.style.display = 'none';
         link.href = url;
         link.setAttribute('download',"123.xlsx");
         document.body.appendChild(link);
         link.click();
      }).catch(function (e) {
          //console.log("fetch fail", JSON.stringify(params));
      });
  }
}

export default App;
