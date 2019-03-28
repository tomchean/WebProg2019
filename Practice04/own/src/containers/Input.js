import React, { Component } from 'react';
import '../styles.css';


export default ({onKeyPress}) => {
    return <input type="text" id="todo-input" className="todo-app__input"
                  placeholder="What needs to be done?"
                  onKeyPress={onKeyPress}
           />;
}