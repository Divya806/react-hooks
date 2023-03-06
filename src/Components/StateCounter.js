import React from 'react'

class StateCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return(
            <div>
            <div>{this.state.count}</div>
            <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default StateCounter