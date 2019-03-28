import React, { Component } from 'react';
import '../styles.css';
import Item from '../components/Item'
import Input from './Input';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo_list : [],
            index : 0,
        };
    }

    AddItem(detail){
        this.setState( state=> {
            const list = state.todo_list.push( <Item id ={state.index} detail={detail}/>);
            return {list,};
        });
    }

    handleInput = e => {
        if (e.key === "Enter") {
            if(e.target.value !== ""){
                this.AddItem(e.target.value);
                this.Update_index();
            }
            e.target.value = "";
        }
    };
    Update_index(){
        this.setState( state =>{
            const index = state.index+1;
            return {index}
        });
    }
    render(){
        
        return(
            <div>
                <Input onKeyPress={this.handleInput}/>
                <ul className="todo-app__list" id="todo-list">
                    {this.state.todo_list}
                </ul>                    
            </div>
        )
    }
}

export default Todo;