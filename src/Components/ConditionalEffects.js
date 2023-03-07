import React, {useState, useEffect} from 'react'

function ConditionalEffects() {
    const [count,setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() =>{
        console.log('documnet clicked')
        document.title= `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={() =>setCount(prevCount => prevCount+1)}>Count {count}</button>
        </div>
    )
}

export default ConditionalEffects