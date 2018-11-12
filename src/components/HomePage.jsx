import React, { Component } from 'react';

const HomePage = (props) => {
    return (
        <div>
        
        <h1>{`Welcome to your to do list ${props.name}!`}</h1>
        <h2>Here you can create a list of all the things you need to get done.</h2>
        <div>
            <p>What is your name?</p>
            <input onChange={props.nameSubmit} name="name" type="text"></input>
        </div>
        <button onClick={props.handleClick} className="HomePage">Click to get started</button>
        </div>
    )
}

export default HomePage