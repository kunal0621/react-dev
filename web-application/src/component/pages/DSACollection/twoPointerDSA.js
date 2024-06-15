import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import axios from 'axios'
import { setDsaQuestion1Answer, setDsaQuestion1State, setDsaQuestion2Answer, setDsaQuestion2State2, setDsaQuestion2State1, setDsaQuestion3State, setDsaQuestion3Answer } from '../../../store/dsaQuestionSlice/two-pointer-slice';

const TwoPointerContainer = () => {
    const dispatch = useDispatch()
    const answer1 = useSelector(
        (state) => state.twoPointerSlice.answer1, shallowEqual
    )
    const answer1fieldText = useSelector(
        (state) => state.twoPointerSlice.answer1fieldText, shallowEqual
    )
    const answer2 = useSelector(
        (state) => state.twoPointerSlice.answer2, shallowEqual
    )
    const answer2field1Text = useSelector(
        (state) => state.twoPointerSlice.answer2field1Text, shallowEqual
    )
    const answer2field2Text = useSelector(
        (state) => state.twoPointerSlice.answer2field2Text, shallowEqual
    )
    const answer3 = useSelector(
        (state) => state.twoPointerSlice.answer3, shallowEqual
    )
    const answer3fieldText = useSelector(
        (state) => state.twoPointerSlice.answer3fieldText, shallowEqual
    )
    const handleOnChangeDebounce = (event) => {
        setTimeout(() => {
            handleAnswer(event)
            callAPIservice()
        }, 500);
    }
    const callAPIservice = () => {
        axios.get(`${urlGateway}/tst/1`).then(res => {
            console.log('123', res.data)
        }).catch(error => {
            console.error('error fetching data', error)
        })
    }
    
    const handleAnswer = (event) => {
        let currentVal = ''
        let currentChild = event.target.parentElement.children
        for (let i = 0; i < currentChild.length; i++) {
            switch (currentChild[i].classList[0]) {
                case 'q1-field':
                    currentVal = {answer1fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion1State(currentVal))
                    break;
                case 'q2-field1':
                    currentVal = {answer2field1Text: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion2State1(currentVal))
                    break;
                case 'q2-field2':
                    currentVal = {answer2field2Text: event.target.parentElement.previousElementSibling.children[1].value}
                    dispatch(setDsaQuestion2State2(currentVal))
                    break;
                case 'q3-field':
                    currentVal = {answer3fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion3State(currentVal))
                    break;
                // case 'q3-field2':
                //     currentVal = {answer3field2Text: event.target.parentElement.previousElementSibling.children[1].value}
                //     dispatch(setDsaQuestion3State2(currentVal))
                //     break;
                // case 'q4-field1':
                //     currentVal = {answer4FieldText: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion4State(currentVal))
                //     break;
                // case 'q5-field1':
                //     currentVal = {answer5fieldText: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion5State(currentVal))
                //     break;
                // case 'q6-field1':
                //     currentVal = {answer6fieldText1: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion6State1(currentVal))
                //     break;
                // case 'q6-field2':
                //     currentVal = {answer6fieldText2: event.target.parentElement.previousElementSibling.children[1].value}
                //     dispatch(setDsaQuestion6State2(currentVal))
                //     break;
                // case 'q7-field':
                //     currentVal = {answer7fieldText: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion7State(currentVal))
                //     break;
                // case 'q8-field':
                //     currentVal = {answer8fieldText: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion8State(currentVal))
                //     break;
                // case 'q9-field':
                //     currentVal = {answer9fieldText: event.target.parentElement.children[i].value}
                //     dispatch(setDsaQuestion9State(currentVal))
                //     break;
                default:
                    currentVal = {}
                    break;
            }
        }
    }
    const getAnswer1 = () => {
        let isPalindrome = answer1fieldText.replace(/[^a-zA-Z0-9]/g, '').split('').join('').toLowerCase() === answer1fieldText.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('').toLowerCase()
        dispatch(setDsaQuestion1Answer({answer1: `This is ${isPalindrome ? 'Valid' : 'not Valid'} Palindrome`}))
    }
    const getAnswer2 = () => {
        let sortedArray = answer2field1Text
        let target = answer2field2Text

        for (let i = 0; i < sortedArray.length; i++) {
            for (let j = sortedArray.length - 1; j > 0; j--) {
                if (target === sortedArray[i] + sortedArray[j]) {
                    return dispatch(setDsaQuestion2Answer({answer2: `The valid number in array is [${[sortedArray[i], sortedArray[j]]}]`}))
                }
            }   
        }
    }
    const getAnswer3 = () => {
        const numSumArray = answer3fieldText
        let tripletObj = {}

        for (let i = 0; i < 1; i++) {
            for (let j = numSumArray.length; j > 0; j--) {
                if (numSumArray[i] + numSumArray[j] + numSumArray[j - 1] === 0) {
                    if (i !== j) {
                        tripletObj[i, j, j-1] = [numSumArray[i], numSumArray[j], numSumArray[j - 1]]
                    }
                }
                
            }
            
        }
        dispatch(setDsaQuestion3Answer({answer3: `The triplets are [${tripletObj}]`}))
    }

    return(
        <>
            <Accordion>
                <Accordion.Item eventKey='0'>
                <Accordion.Header>Two Pointers</Accordion.Header>
                <Accordion.Body>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                        <Accordion.Header>Question 1</Accordion.Header>
                        <Accordion.Body>
                        <h6>A phrase is a Palindrome if, after converting all uppeercase to lowercase and removing all non-alphanumeric character, it reads the same forward and backward. alphanumeric character includes letter and numbers.</h6>
                        <label className='col-sm-1'>field1: </label><input type='text' className='q1-field' defaultValue={answer1fieldText} onChange={handleOnChangeDebounce}/>
                        <div className='div-padding'><button onClick={getAnswer1} defaultValue={answer1}>Answer1: {answer1}</button></div>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='1'>
                        <Accordion.Header>Question 2</Accordion.Header>
                        <Accordion.Body>
                        <h6>Given a 1-indexed array of integer number that is already sorted in non-decreasing order, find two number such that they add up to specific target number (solve in Constant space).</h6>
                        <label className='col-sm-1'>field1: </label><input type='text' className='q2-field1' defaultValue={answer2field1Text} onChange={handleOnChangeDebounce}/>
                        <div className='q2-field2 div-padding'><label className='col-sm-1'>field2: </label><input type='text' className='q2-field2' defaultValue={answer2field2Text} onChange={handleOnChangeDebounce}/></div>
                        <div className='div-padding'><button onClick={getAnswer2} defaultValue={answer2}>Answer2: {answer2}</button></div>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey='2'>
                        <Accordion.Header>Question 3</Accordion.Header>
                        <Accordion.Body>
                        <h6>Given an integer array num, return all the triplets [num[i], num[j], num[k]] such that i!= j, i != k and j != k, and num[i] + num[j] + num[k] == 0</h6>
                        <label className='col-sm-1'>field1: </label><input type='text' className='q3-field' defaultValue={answer3fieldText} onChange={handleOnChangeDebounce}/>
                        <div className='div-padding'><button onClick={getAnswer3} defaultValue={answer3}>Answer3: {answer3}</button></div>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default TwoPointerContainer