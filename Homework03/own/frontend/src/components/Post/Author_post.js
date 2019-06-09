import React from 'react'

import Post from './Post'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'

const Author = ({data}) => {

    let posts = data.posts.map((post,id)=>
        <Post data={post} key ={id}/>
    )
 
    return (
        <Card style={{ margin: '30px auto', width: '400px' }}>
            <li style={{backgroundColor: "rgb(220, 220, 220)"}}>
                <CardHeader>
                    <input type="checkbox" id={data.name}></input>
                    <label htmlFor={data.name} className="first">{data.name+'\'s  post : '+data.posts.length}</label>
                    <ul>{posts}</ul>
                </CardHeader>            
            </li>
        </Card> 
    )
}

export default Author
