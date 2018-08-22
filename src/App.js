import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SvgLoader, SvgProxy } from "react-svgmt";

const svgUrl = "/product.svg";

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
          <div style={{ width: 400 }}>
            <SvgLoader path={svgUrl}>
              <SvgProxy selector="rect.custom_front-top-left-outline" stroke-opacity="1" onclick={() => console.log('click')} />
            </SvgLoader>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
