import React,{Component} from 'react';
import deletedfig from "../img/x.png"

class Todo extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isDeleted:false,
      isCompleted:false
    };
  }
  



  render() {
    
    // render內的func也是用js的語法
    // let  Delete = () =>{
    //   }

    const {id,text,isDeleted,isCompleted} = this.props;
    // console.log(isCompleted)
    // console.log(isDeleted)
    console.log(id)
    

    const styles = {
        textDecoration:"line-through",
    }


    return(
      <>
        { 
          // render 裡面不能用if else 要用三元boolin
          (isDeleted ||
              <li className="todo-app__item">
                <div className="todo-app__checkbox">
                  <input type="checkbox" id={id} onClick={()=>this.props.Finish(id)} />
                  <label for={id}></label>
                </div>
                
                <h1 className="todo-app__detail" 
                style = {isCompleted ? styles:null}>{text}</h1>
                {/* 在父層改 */}
                <img className="todo-app__item-x" onClick={()=>this.props.Deleted(id)} src={deletedfig}/>
              </li> 
          )
        }
      </>
    )
  }
}





export default Todo;
