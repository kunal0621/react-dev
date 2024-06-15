import React, { useState, Fragment, } from 'react';
import {Button, Form} from 'react-bootstrap';
import _ from 'lodash'
import CreatePDF from '../../componentPdf/mainPdf';
import items from '../constants/location.json'

const CreateOrder = () => {
    
    const [SelectState, setSelectState] = useState(null)
    const [selectCity, setCity] = useState(null)
    const [values, setValues] = useState({})
    const handleStateChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
        setSelectState(event.target.value)
    }
    const handleCityChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setValues({ ...values, [name]: value });
        setCity(event.target.value)
    }
    const selectedState = _.find(items, (item) => {
            return (item.state === SelectState)
        })
    const optionSelect = selectedState?.city.map((val, index) => {
        return (<option key= {index} value={val}>{val}</option>)
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        console.log("push data somewhere :)")
        console.log(values)
        CreatePDF(values)
    }
    const onFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    return (
        <Fragment>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type = 'text' name = 'owner name' placeholder='Enter Name' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type = 'date' name='start date' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control type = 'time' name='start time' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>End Date</Form.Label>
                <Form.Control type = 'date' name='end date' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>End Time</Form.Label>
                <Form.Control type = 'time'name='end time' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Select State</Form.Label>
                <Form.Select name='selectedState' onChange={handleStateChange} >
                    <option>Select</option>
                    {items.map((item, index) =>{
                        return (<option key = {index} value={item.state}>{item.state}</option>)
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Select city</Form.Label>
                <Form.Select name='selectedCity' onChange={handleCityChange} >
                    <option>Select</option>
                    {optionSelect}
                </Form.Select>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Full Address</Form.Label>
                <Form.Control type = 'text' name='address' placeholder='Enter Address' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text col-sm-2'>
                <Form.Label>Mobile/Phone Number</Form.Label>
                <Form.Control type = 'number' name='phone number' placeholder='Enter Mobile/phone Number' onChange={onFormChange}>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Fragment>
    );
}
 
export default CreateOrder;

