import './App.css';
import MainComponent from './Components/MainComponent';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    todo: [],
  }
  addNewTask() {
    let newList = this.state.todo.slice();               //this create a cope of the state
    let addList = this.state.todo.unshift(taskVal);      //push the new task in todos list
    let date = new Date();                               //time method
  }
  render() {
    return (
      <div className="App">
        <MainComponent todos={this.addNewTask(taskVal)} />
      </div>
    )
  }
}
