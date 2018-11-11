import React, { Component } from 'react';

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
      <p>To do list</p>
      <button onClick={this.props.handleClick}>Home</button>
      <input name="search" type="text" onChange={this.props.handleChange} />
      <button type="submit" onClick={this.props.handleSearch}>Search</button>
      <form>
            <input onChange={this.props.handleChange} type="text">
            </input>
        </form>
        <button onClick={this.props.handleSubmit} type="submit">submit!</button>
        {this.props.renderToDos}
      </div>
    );
  }
}

export default ToDo;