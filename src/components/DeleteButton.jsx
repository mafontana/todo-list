import React, { Component } from 'react';

class DeleteButton extends Component {
    constructor() {
      super()
      this.state={
        
      }
    }
  
  
    render() {
        return (
            <div className="button">
                <button onClick={this.props.deleteTask}>Delete Task</button>
            </div>
        )
    }
  }

export default DeleteButton