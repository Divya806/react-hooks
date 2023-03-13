import React from 'react'

class ItemsMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            comments: ""
        }
    }

    handleUserChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${this.state.firstName}`)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>firstName</label>
                    <input type="firstName"  value={this.state.firstName} onChange={this.handleUserChange}/>
                </div>
                <div>
                    <label>lastName</label>
                    <input type="lastName"  value={this.state.lastName} onChange={this.handleUserChange}/>
                </div>
                <button type="submit" value="submit">Submit</button>
            </form>
        )
    }

}

export default ItemsMap