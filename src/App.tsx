import { Button } from 'antd';
import { Button as ButtonMobile } from 'antd-mobile';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button type="primary">Hello</Button>
        <ButtonMobile type="primary">Hello</ButtonMobile>
      </div>
    );
  }
}

export default App;
