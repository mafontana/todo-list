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
      toDos: [{task: "walk the dog",
              id: 0}, 
              {
                task: "feed the cat",
                id: 1}],
      name: "",
      boxChecked: false
    
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
    // toDos: [...this.state.toDos, this.state.task]
    toDos: [...this.state.toDos,
            {
              task: this.state.task,
              id: this.state.toDos.length}, 
          ],
            

  })
}

handleCheckBox = () => {
  console.log("checkbox was clicked")
  this.setState({
    boxChecked: !this.state.boxChecked
  })
}

deleteTask = (id) => {
  const newTodoList = this.state.toDos.filter(todo => todo.id != id)
  console.log(newTodoList)
  console.log("delete button was clicked")
  this.setState({
    toDos: newTodoList
  })

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
              handleCheckBox={this.handleCheckBox}
              boxChecked={this.state.boxChecked}
              deleteTask={this.deleteTask}
              id={this.state.toDos.id} /> :
        <HomePage handleClick={this.handleClick} 
              nameSubmit={this.nameSubmit} 
              name={name}/>
      }
       
      </div>
    );
  }
}

export default App;
