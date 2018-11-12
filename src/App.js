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
      toDos: ["walk the dog", "drink water"],
      name: "",
    
    }
  }

nameSubmit = (e) => {
  console.log(e.target.value)
  this.setState({
    name: e.target.value
  })
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

// handleSubmit = (e) => {
//   // e.preventDefault();
//   console.log("new too do", e.target.value)
//   this.setState({
//     toDos: [...this.state.toDos, e.target.value]
//   })
// }

handleSubmit = (e) => {
  console.log(e.target.value)
  this.setState({
    toDos: [...this.state.toDos, this.state.task]
  })
}

handleCheckBox = () => {
  console.log("checkbox was clicked")
  this.setState({
    boxChecked: !this.state.boxChecked
  })
}

deleteTask = () => {
  
}


// handleSearch = () => {
//   let filtered = this.state.toDos.filter(toDo => {
//     return toDo.includes(this.state.search)
//   })
//   console.log(filtered)
// }



render() {
    //variables go inside render
    
// var renderTodos = this.state.toDos.map(todo => <div className="task">
//                                                 <input type="checkbox" onClick={this.props.handleCheckBox}></input>
//                                                 <p>{todo}</p>
//                                                 </div>)



const name = this.state.name
  
    return (
      <div className="App">
      {this.state.loaded ? 
        <ToDo handleSearch={this.handleSearch} 
              toDos={this.state.toDos} 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              handleClick={this.handleClick}
              name={this.state.name}
              handleCheckBox={this.handleCheckBox} /> :
        <HomePage handleClick={this.handleClick} 
              nameSubmit={this.nameSubmit} 
              name={name}/>
      }
       
      </div>
    );
  }
}

export default App;
