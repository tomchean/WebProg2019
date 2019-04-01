import React from 'react';
import '../index.css';
import Todo from '../components/Input';
import Button from '../components/Button';




class Todo_list extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            orignal_all_Todo : [],
            all_Todo : [],
            text:'' ,
            id:0,
            // last : []
        };
    }

    // Input
    handleInput = e => {
        if (e.key === "Enter") {
            const value = e.target.value;
            if (value !== ''){
                this.setState(
                    {
                        all_Todo: [ ...this.state.all_Todo ,
                            {
                                id:this.state.id,
                                text:value,
                                isDeleted:false,
                                isCompleted:false,
                                // last : all_Todo
                            }
                        ] 

                    }        
                )
                // console.log(this.state.all_Todo);
                this.state.id += 1;
            };
            e.target.value = '';
            // e.target.blur();
            // 脫離在focus在這個input的狀態
        };
    }

    handleAddInput = () =>{
        this.setState(state => ({ count: state.count + 1}) )
    }

    // 子層呼叫父層去改子層的state
    Deleted = (id) =>{
        console.log("--delete----dad----");
        const {all_Todo} = this.state;
        all_Todo[id].isDeleted = true;
        this.setState(
            {
                all_Todo : all_Todo,
            }
        )
    }
    Finish = (id) =>{
        console.log("--Finish----dad----");
        const {all_Todo} = this.state;
        if (all_Todo[id].isCompleted === true){
            all_Todo[id].isCompleted = false;
        }else if (all_Todo[id].isCompleted === false){
            all_Todo[id].isCompleted = true;
        }
        this.setState(
            {
                all_Todo : all_Todo,
            }
        )
    }


    // // 父層改 卡在如何從父層改子層
    // Deleted = ()=>{
    //     // console.log("--delete----dad----");
    //     console.log(this)
    //     this.setState(
    //         {
    //             isDeleted:true,
    //         }
    //     )
    //     console.log(this.state.isDeleted)
    // }


    // last_time  = () =>{
    //     this.setState(
    //         {last : this.state}
    //     )
    // }

    Finish_check = (status) =>{ // 檢查完成與未完成
        console.log(this.state.la)
        // this.last_time()
        // const {all_Todo} =  this.state.last;
        // let new_Todo = null;
        
        let new_Todo = null;
        const {all_Todo} =  this.state;

        if (status === "Active"){
            new_Todo = all_Todo.filter(
                all_Todo =>{
                    return all_Todo.isCompleted === false
            })
        }
        else if (status === "Completed"){
            new_Todo = all_Todo.filter(
                all_Todo =>{
                    return all_Todo.isCompleted === true
            })
        }
        else if (status === "All"){
            new_Todo = all_Todo.filter(
                all_Todo =>{
                    return all_Todo.isDeleted === false
            })
        }
        this.setState(
            {all_Todo : new_Todo}
        )
    }


    Final_check = (e)=> { // 最後檢查數量
        // console.log("檢查數量",this.state.all_Todo)
        let todoCount_num = 0
        for (var i = 0; i < this.state.all_Todo.length; i++) {
            if (this.state.all_Todo[i].isDeleted === false) { //還沒完成
                if (this.state.all_Todo[i].isCompleted === false) { //還沒完成
                    todoCount_num += 1
                }
            }
        }
        return todoCount_num
    }


    // // class內的func 叫做method 
    // // 有點類似class的內部物件,不用另外宣告
    // Delete = () =>{
    //     console.log("--delete--------");
    //     this.setState({isDeleted:true});
    // }
    // // 要整個函式執行完才會return回去

    render() {

        const {all_Todo} = this.state;
        return (
            <div id="root" class="todo-app__root">
        
                <header class="todo-app__header">
                    <h1 class="todo-app__title ">todos</h1>
                </header>
        
                <section class="todo-app__main">
                    {/* <input id="todo-input" class="todo-app__input" type="text" placeholder="What needs to be done?"> */}
                    <input 
                            id="todo-input" 
                            class="todo-app__input" 
                            type="text" 
                            placeholder="What needs to be done?"
                            onKeyPress={this.handleInput}   
                            />
                </section>
        
                <ul class="todo-app__list" id="todo-list">
                    
                        { all_Todo.map( todos=>(
                                    <Todo
                                        key = {todos.id}
                                        id = {todos.id}
                                        text = {todos.text}
                                        isCompleted = {todos.isCompleted}
                                        isDeleted = {todos.isDeleted}

                                        Final_check = {this.Final_check}
                                        Deleted = {this.Deleted}
                                        Finish = {this.Finish}
                                    />
                                )
                            )
                        }
                          
                </ul>
        
                <footer class="todo-app__footer" id="todo-footer">
                    <div class="todo-app__total" id="todo-count">
                        {this.Final_check(all_Todo)} left
                    </div>
                    <ul class="todo-app__view-buttons">
                        <Button text='All' onClick={()=>this.Finish_check('All')} />
                        <Button text='Active' onClick={()=>this.Finish_check('Active')} />
                        <Button text='Completed' onClick={()=>this.Finish_check('Completed')} />
                    </ul>
        
                    <div class="todo-app__clean">
                        <button id="clean_all">Clean completed</button>
                    </div>
                </footer>
            </div>
    
        );
    }
}


export default Todo_list; 





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
