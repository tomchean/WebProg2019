const todolist = document.getElementById("todo-list");

var index = 0;

var display_state =0;

var todoitem = [];


function enter(event){ // functionality: when user press enter ->add new item on list 
    if (event.keyCode === 13 && event.target.value !== ''){
        newitem = { node:additem(event.target.value), complete : false};
        event.target.value ="";
        index = index + 1;
        todoitem.push(newitem);
        update_list();
        update_count();
    }
}

function additem(a){ //functionality: add new node on todoitem
    const itemnode = document.createElement("li");
    const wrapper = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.setAttribute("id",index);
    checkbox.setAttribute("type","checkbox");

    label.setAttribute("for",index);
    label.setAttribute("onclick","complete(this.previousSibling,this.parentNode.parentNode)");
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    wrapper.setAttribute("class","todo-app__checkbox");

    
    itemnode.setAttribute("class","todo-app__item");
    itemnode.appendChild(wrapper);

    const detail = document.createElement("h1");
    detail.setAttribute("id",String(index)+"_d")
    detail.setAttribute("class","todo-app__item-detail");
    detail.innerHTML = a;
    itemnode.appendChild(detail);

    const img = document.createElement("img");
    img.setAttribute("src","img/x.png");
    img.setAttribute("id",index);
    img.setAttribute("class","todo-app__item-x");
    img.setAttribute("onclick","remove_item(this.parentNode)");
    itemnode.appendChild(img);

    return itemnode;
}

function remove_item(elem){ //functionality: remove one node from todoitem
    for(i=0;i<todoitem.length;i++){
        if(todoitem[i].node == elem){
            todoitem.splice(i,1);
        }
    }    
    update_list();
    update_count();
}

function complete(elem,node){ //functionality: when user press checkbox,update node state and change display style
    detail = document.getElementById(String(elem.id)+"_d");
    for(i=0;i<todoitem.length;i++){
        if(todoitem[i].node == node){
            if(!todoitem[i].complete){
                todoitem[i].complete = true;
                update_count();
                detail.style["textDecoration"] = "line-through";
                detail.style["opacity"] = 0.5;
            }
            else{
                todoitem[i].complete = false;
                update_count();
                detail.style["textDecoration"] = "none";
                detail.style["opacity"] = 1;
            }
        }
    } 
    
}



function update_list(){ //functionality: add todoitem to the html node to display on the website
    while (todolist.firstChild) todolist.removeChild(todolist.firstChild);
    if(display_state ==0){
        todoitem.forEach(add_todolist);
    }
    else if(display_state ==1){
        for(i=0;i<todoitem.length;i++){
            if(!todoitem[i].complete){
                add_todolist(todoitem[i]);
            }
        } 
    }
    else{
        for(i=0;i<todoitem.length;i++){
            if(todoitem[i].complete){
                add_todolist(todoitem[i]);
            }
        } 
    }
}

function add_todolist(item){
    todolist.appendChild(item.node);
}

function update_count(){ // functionality: update how many item remain
    todoCount = document.getElementById("count");
    todoCount.innerHTML = String(todoitem.filter(todoitem => !todoitem.complete).length) +" left"
}


function remove_complete(){ // functionality: remove item those who is completed
    for(i=0;i<todoitem.length;i++){
        if(todoitem[i].complete){
            todoitem.splice(i,1);
            i--;
        }
    } 
    update_list();
    update_count();
}

function change_state(elem,state){ //functionality: change which mode to display ->"ALL","active","completed"
    display_state = state;
    document.getElementById("state0").style["background-color"] = "white";
    document.getElementById("state1").style["background-color"] = "white";
    document.getElementById("state2").style["background-color"] = "white";
    if(elem==0){
        document.getElementById("state0").style["background-color"] = "rgba(225, 225, 225, 0.856)";
    }
    else{
        elem.style["background-color"] = "rgba(225, 225, 225, 0.856)";
    }

    update_list();
}
