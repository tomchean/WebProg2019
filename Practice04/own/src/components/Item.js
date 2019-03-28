import React, { Component } from 'react';
import '../styles.css';
import x from './img/x.png';


class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            status:0
        };
    }
    Change_status= (e) =>{
        if(this.state.status ===0){
            this.setState({
            status : 1,
            });
        }
        else{
            this.setState({
                status : 0,
            });
        }
        
    }
    remove = (e) =>{
        this.setState({
            status : 2,
        });
    }
    render(){
        const style ={
            opacity : '0.5',
            textDecoration : 'line-through'
        }
        if(this.state.status === 0){
            return(
                <li className = "todo-app__item">
                    <div className="todo-app__checkbox"> 
                    <input id ={String(this.props.id)+"_i"} type="checkbox"/>
                    <label htmlFor={String(this.props.id)+"_i"} onClick={this.Change_status}/>
                    </div > 
                    <h1 className = "todo-app__item-detail">{this.props.detail}</h1>                
                    <img src ={x} className = "todo-app__item-x" onClick={this.remove}/>
                </li>     
            )
            
        }
        else if (this.state.status === 1){
            return(
                <li className = "todo-app__item">
                    <div className="todo-app__checkbox"> 
                    <input id ={String(this.props.id)+"_i"} type="checkbox"/>
                    <label htmlFor={String(this.props.id)+"_i"} onClick={this.Change_status}/>
                    </div > 
                    <h1 className = "todo-app__item-detail" style={style} >{this.props.detail}</h1>                
                    <img src ={x} className = "todo-app__item-x" onClick={this.SetId}/>
                </li>     
            )
        }
        else{
            return null;
        }
                             
        
    }
}


export default Item;