import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

export default class App extends Component{


  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount(){
    console.log('App - Mounted');
  }

  state = {
    counters : [
        {id: 1, value:4},
        {id: 2, value:5},
        {id: 3, value:0},
        {id: 4, value:10},
    ]
  };

  handleDelete = (counterId) => {
      let fltrdCounters = this.state.counters.filter(counter => counter.id != counterId);
      this.setState(
          { counters : fltrdCounters }
      );
  };

  handleIncrement = counter => {
      const clonedCounters = [...this.state.counters];
      let index = clonedCounters.indexOf(counter);
      clonedCounters[index] = {...counter};
      clonedCounters[index].value++;
      this.setState({counters : clonedCounters});
  };

  render() {
    console.log('App - rendered');

    return (
      <React.Fragment>
          <NavBar totalCounters={this.state.counters.length}> </NavBar>
          <main className="container">
            <Counters 
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}> 
            </Counters>
          </main>
      </React.Fragment>
    );
  }
}
