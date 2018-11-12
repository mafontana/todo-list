import React, { Component } from 'react';

class Checkbox extends Component {
    constructor() {
      super()
      this.state={
        
      }
    }
  
  
    render() {
        return (
            <div className="task">
            <input id={this.props.id} onChange={this.props.checkedBoxId} onClick={this.props.handleCheckBox} type="checkbox"></input>
            <p>{this.props.task}</p>
            </div>
        )
    }
  }

export default Checkbox


