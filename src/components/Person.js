import React from 'react'

const Person = (props) => {
  return (
    <div  className='person'>
        <img src={props.person.image} alt=''/>
        <h1>{props.person.name}</h1>
        <p> {props.person.description}  </p>

    </div>
  )
}

export default Person