import React, { Component } from 'react';
import ListItems from './componets/ListItems/ListItems'
import Header from './componets/header/Header'
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          carrinho: []
      }
  }

  render() {
    return (
      <div>
         <Header />
         
         <div className="container">
          <ListItems />
          </div>
      </div>
    );
  }
}

export default App;
