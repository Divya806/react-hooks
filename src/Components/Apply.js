import React from 'react'
import axios from 'axios'

class Apply extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${this.state.userId} ${this.state.title} ${this.state.body}`)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state) 
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }

    render() {
        return(
            <form onClick={this.handleSubmit}>
                <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} />
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                <button type="submit">Click Me</button>
            </form>
        )
    }

}

export default Apply