import React from 'react'

class SideEffectsCl extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            count: 0
        }
    }

    componentDidMount() {
        document.title =`You clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }

    handleClick =() => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    
    render() {
        return(
            <div>
               <button onClick={this.handleClick}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default SideEffectsCl