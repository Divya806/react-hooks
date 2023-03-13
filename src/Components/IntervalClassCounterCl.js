import React from 'react'

class IntervalClassCounterCl extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            count: 0
        }
    }

    tick =() => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.Interval)
    }

    render() {
        return(
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default IntervalClassCounterCl