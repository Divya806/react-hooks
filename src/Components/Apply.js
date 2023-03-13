import React from 'react'

function Apply() {
    const getName=() => {
        console.log("am execulted")
    }

    return(
        <div>{getName()}</div>
    )
}

export default Apply