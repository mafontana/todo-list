import React, { Component } from 'react';
import './App.css';
import HomePage from "./components/HomePage.jsx";
import ToDo from "./components/ToDo.jsx"

class App extends Component {
  constructor() {
    super()
    this.state={
      loaded: false,
      inputValue: "",
      newTodo: "",
      search: "",
      toDos: ["walk the dog", "drink coffee", "code", "align chakras", "sleep"]
    }
  }

handleClick = () => {
  this.setState({
    loaded: !this.state.loaded
  })
}

handleChange = (event) => {
  console.log(event.target.value);
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({toDos: [...this.state.toDos, this.state.inputValue]
  })
}

handleSearch = () => {
  let filtered = this.state.toDos.filter(toDo => {
    return toDo.includes(this.state.search)
  })
  console.log(filtered)
}


  render() {
    //variables go inside render
    var renderTodos = this.state.toDos.map(todo => <li>{todo}</li>)

    return (
      <div className="App">
      {this.state.loaded ? 
        <ToDo handleSearch={this.handleSearch} 
              renderToDos={renderTodos} 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              handleClick={this.handleClick} /> :
        <HomePage handleClick={this.handleClick}/>
      }
       
      </div>
    );
  }
}

export default App;
