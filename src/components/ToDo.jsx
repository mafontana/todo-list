import React, { Component } from 'react';
import Checkbox from "./Checkbox.jsx"

class ToDo extends Component {
  constructor() {
    super()
    this.state={
      loaded: false
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
        
        <Checkbox />
      </div>
    );
  }
}

export default ToDo;