import React, {useState} from 'react'

function Checker(){

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevCount=> prevCount + 1)
    }

 return(
    <div>
        <button onClick={handleClick}>{count}</button>
    </div>
 )

}
export default Checker