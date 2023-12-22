import React, { useEffect, useState, Component } from 'react';
import {Button, Form} from 'react-bootstrap';
import _ from 'lodash'
import items from '../constants/location.json'

const CreateOrder = () => {
    
    const [SelectState, setSelectState] = useState(null)
    const [selectCity, setCity] = useState(null)
    const handleStateChange = (event) => {
        setSelectState(event.target.value)
    }
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    const selectedState = _.find(items, (item) => {
            return (item.state === SelectState)
        })
    const optionSelect = selectedState?.city.map((val, index) => {
        return (<option key= {index} value={val}>{val}</option>)
    })

    return (
        <Form>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type = 'text' placeholder='Enter Name'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type = 'date'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control type = 'time'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>End Date</Form.Label>
                <Form.Control type = 'date'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>End Time</Form.Label>
                <Form.Control type = 'time'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Select State</Form.Label>
                <Form.Select placeholder='Please select state from where journey Starts'  onChange={handleStateChange} >
                    <option>Select</option>
                    {items.map((item, index) =>{
                        return (<option key = {index} value={item.state}>{item.state}</option>)
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Select city</Form.Label>
                <Form.Select placeholder='select neigbourhood land mark' onChange={handleCityChange} >
                    <option>Select</option>
                    {optionSelect}
                </Form.Select>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Full Address</Form.Label>
                <Form.Control type = 'text' placeholder='Enter Address'>
                </Form.Control>
            </Form.Group>
            <Form.Group className='field-Text sm-2'>
                <Form.Label>Mobile/Phone Number</Form.Label>
                <Form.Control type = 'number' placeholder='Enter Mobile/phone Number'>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}
 
export default CreateOrder;

