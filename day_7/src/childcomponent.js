import React from 'react'

const ChildCompont = (props) => {
  console.log(props.userName);
  return (
    <div>
      <h1>Name: {props.username}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Section: {props.section}</h1>
    </div>
  )
}

export default ChildCompont