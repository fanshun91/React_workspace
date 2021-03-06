import React, { Component } from 'react';
import Header from './components/Header'
import OrderList from './components/OrderList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default App;
