import axios from 'axios';
import React, { Component } from 'react';
import Errors from './Errors';
import List from './List';
import Button from './Button';
import Modal from './modal';
import Form from './form';


class MernTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: undefined,
            showModel: false,
            formValue: {},
            formError: undefined,
            isAllInput: false
        }
    }

    componentDidMount = () => {
        this.fetchData()
    }

    showModal = () => {
        this.setState({
            showModel: true
        })
    }

    closeModal = () => {
        this.setState({
            error: undefined,
            showModel: false,
            formValue: {},
            formError: undefined
        })
    }

    handleInput = (event) => {
        const { name, value } = event.target
        let { formValue } = this.state
        formValue = {
            ...formValue,
            [name]: name === 'member' ? value.split(',') : value
        }
        this.setState({formValue})
    }

    handleSubmit = (event) => {
        const { formValue } = this.state
        const payload = []
        payload.push(formValue)
        axios.post(`http://localhost:4000/addTeam`, payload).then(resp => {
            window.alert('Player added sucessfully')
            this.fetchData()
            this.closeModal()
        }).catch(error => {
            window.alert(error)
        })
    }

    fetchData = () => [
        axios.get(`http://localhost:4000/tst/1`).then(resp => {
            this.setState({
                data: resp.data
            })
        }).catch(error => {
            window.alert(error)
        })
    ]

    render() {
        const { showModel, error, data, formError } = this.state
        return (
            <>
                <div className="mern-container">
                    <div className='header-container'>
                        <h2 className='app-title'>Hackathon Squad View</h2>
                        <Errors message={error} />
                        <List data={data} />
                        <div className='footer-controls'>
                            <Button className="success" onClick={this.showModal}>Add</Button>
                        </div>

                    </div>
                    <Modal show={showModel} closeModal={this.closeModal}>
                        {
                            <Form isAllInput={this.state.isAllInput} handleSave={this.handleSubmit} handleInput={this.handleInput} title={"Add Team"} error={formError} />
                        }
                    </Modal>
                </div>

            </>
        );
    }
}

export default MernTest;