import React, { useState } from 'react'

function StateCounter2() {
 const initialCount = 0
 const [count, setCount] = useState(initialCount)

 return(
    <div>
    <div>{count}</div>
    <button onClick={() =>setCount(initialCount)}>Reset</button>
    <button onClick={() =>setCount(prevCount=> prevCount+ 1)}>Increment</button>
    <button onClick={() =>setCount(prevCount=> prevCount- 1)}>Decrement</button>
    {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
 )

}

export default StateCounter2