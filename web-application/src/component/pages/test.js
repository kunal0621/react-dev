import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 1
    }
    handleClick = (event) => {
        this.setState
        ({
            count: this.state.count + 1
        })
    }
    componentDidMount = () => {
        console.log('did Mount')
    }
    componentWillMount = () => {
        console.log('will mount')
    }
    componentDidUpdate = () => {
        console.log('did update')
    }
    componentWillUpdate = () => {
        console.log('will update')
    }
    render() { 
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick} value={this.state.count}>click</button>
            </div>
        );
    }
}
 
export default Test;