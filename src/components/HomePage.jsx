import React, { Component } from 'react';

const HomePage = (props) => {
    return (
        <div onClick={props.handleClick} className="HomePage">
        <h1>This is a page</h1>
        </div>
    )
}

export default HomePage