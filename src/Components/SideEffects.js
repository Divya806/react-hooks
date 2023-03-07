import React, { useState, useEffect } from 'react'

function SideEffects() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title= `you clicked ${count} times`
    })

    return(
        <div>
        <div>{count} times</div>
        <button onClick={() =>setCount(prevCount => prevCount+1)}>Click Me {count}</button>
        </div>
    )
}

export default SideEffects