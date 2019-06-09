import React from 'react'


const Author = ({text,id}) => {
  return (
    <option  value={id} key ={id} >{text.name}</option>
  )
}

export default Author
