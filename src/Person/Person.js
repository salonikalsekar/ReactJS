import React from 'react'
import './Person.css'
const person = (props) => {
    return (
        <div>
            <p>hi I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;


// components - maintainable. Reusable and configurable -  we can call the component many times with different props