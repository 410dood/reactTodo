import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {MyRoutes}
      </div>
    );
  }
}

export default App;