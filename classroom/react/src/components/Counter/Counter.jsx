import React, { useState } from 'react'

const Counter = ({user}) => {

    const [count , setcount] = useState(0)
    const plus = () => {
        setcount(count + 1)
    }

        const minus = () => {
        setcount(count - 1)
    }


  return (
    <div>
        <h1>{user}: {count} </h1>
        <div>
            <button onClick = {plus} >+</button>
            <button onClick = {minus}>-</button>
        </div>
    </div>
  )
}

export default Counter