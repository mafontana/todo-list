import React, { Component } from 'react';
import Checkbox from "./Checkbox.jsx"

class ToDo extends Component {
  constructor() {
    super()
    this.state={
      loaded: false,
    }
  }


  render() {
    return (
      <div className="ToDo">
      <p>{this.props.name ? `${this.props.name}'s to do list` : "To do List"}</p>
      <button onClick={this.props.handleClick}>Home</button>
      <input name="search" type="text" onChange={this.props.handleChange} />
      <button type="submit" onClick={this.props.handleSearch}>Search</button>
      <form>
            <p>Enter a task:</p>
            <input onChange={this.props.handleChange} name="task" type="text">
            </input>
      </form>
        <button onClick={this.props.handleSubmit} type="submit">submit!</button>
        {this.props.toDos.map(tasks => <Checkbox task={tasks.task}  id={tasks.id} handleCheckBox={this.props.handleCheckBox}/> )}
       
      </div>
    );
  }
}

export default ToDo;

//{this.props.toDos.map(task => <Checkbox name={this.props.name} toDos={task} handleCheckBox={this.props.handleCheckBox}/>)}

//delete button:
//{this.props.boxChecked ? <button onClick={this.props.deleteTask}>Delete task</button>: <p>Select a task to delete it.</p>}

    // <button onClick={this.props.deleteTask(this.props.id)}>Delete task </button>