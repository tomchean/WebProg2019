import React, { Component } from 'react';
import './styles.css'

class Background extends Component{
    render(){
        return (
            <div id="root" className="todo-app__root">
                <header className="todo-app__header">
                    <h1 className="todo-app__title">
                        todos
                    </h1>
                </header>
                <section className="todo-app__main">
                    <input type="text" id="todo-input" className="todo-app__input" placeholder="What needs to be done?" onkeyup="enter(event)"/>
                    <ul className="todo-app__list" id="todo-list"></ul>
                </section>
                <footer className="todo-app__footer" id="todo-footer">
                    <div className="todo-app__total" id="count">
                        0 left
                    </div>
                    <ul className="todo-app__view-buttons">
                        
                        <button id="state0" onclick="change_state(this,0)">All</button>
                        <button id="state1" onclick="change_state(this,1)">Active</button>
                        <button id="state2" onclick="change_state(this,2)">Completed</button>
                    </ul>
                    <div className="todo-app__clean">
                        <button onclick="remove_complete()">Clear complete</button>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Background;