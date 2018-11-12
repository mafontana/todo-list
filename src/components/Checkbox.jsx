import React, { Component } from 'react';

const Checkbox = (props) => {

// const newToDo = props.toDos.map(task => )
    
    return (
        <div className="task">
        <input onClick={props.handleCheckBox} type="checkbox"></input>
        <p>{props.toDos}</p>
        </div>
    )
}

export default Checkbox
