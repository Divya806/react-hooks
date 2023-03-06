import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return(
        <div>{count}
            <button onClick={() =>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default HookCounter