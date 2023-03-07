import React from 'react'

class SideEffectsCl extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0
        }
    }

    handleClick = () => {
        this.setState( prevState => ({
            count: prevState.count +1
        }))
    }

    componentDidMount() {
         document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title =`You clicked ${this.state.count} times`
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

export default SideEffectsCl