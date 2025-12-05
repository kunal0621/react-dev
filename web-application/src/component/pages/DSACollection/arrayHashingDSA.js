import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { setDsaQuestion1Answer, setDsaQuestion1State, setDsaQuestion2Answer, setDsaQuestion2State1, setDsaQuestion2State2, setDsaQuestion3Answer, setDsaQuestion3State1, setDsaQuestion3State2, setDsaQuestion4Answer, setDsaQuestion4State, setDsaQuestion5Answer, setDsaQuestion5State, setDsaQuestion6Answer, setDsaQuestion6State1, setDsaQuestion6State2, setDsaQuestion7Answer, setDsaQuestion7State, setDsaQuestion8Answer, setDsaQuestion8State, setDsaQuestion9Answer, setDsaQuestion9State } from '../../../store/dsaQuestionSlice/array-dsa-slice'
import { Accordion,  } from 'react-bootstrap';

const ArrayHashing = () => {
    const dispatch = useDispatch();
    const answer1 = useSelector(
        (state) => state.arrayDsaSlice.answer1, shallowEqual
    )
    const answer1Text = useSelector(
        (state) => state.arrayDsaSlice.answer1Text, shallowEqual
    )
    const answer2 = useSelector(
        (state) => state.arrayDsaSlice.answer2, shallowEqual
    )
    const answer2field1Text = useSelector(
        (state) => state.arrayDsaSlice.answer2field1Text, shallowEqual
    )
    const answer2field2Text = useSelector(
        (state) => state.arrayDsaSlice.answer2field2Text, shallowEqual
    )
    const answer3 = useSelector(
        (state) => state.arrayDsaSlice.answer3, shallowEqual
    )
    const answer3field1Text = useSelector(
        (state) => state.arrayDsaSlice.answer3field1Text, shallowEqual
    )
    const answer3field2Text = useSelector(
        (state) => state.arrayDsaSlice.answer3field2Text, shallowEqual
    )
    const answer4FieldText = useSelector(
        (state) => state.arrayDsaSlice.answer4FieldText, shallowEqual
    )
    const answer4 = useSelector(
        (state) => state.arrayDsaSlice.answer4, shallowEqual
    )
    const answer5 = useSelector(
        (state) => state.arrayDsaSlice.answer5, shallowEqual
    )
    const answer5fieldText = useSelector(
        (state) => state.arrayDsaSlice.answer5fieldText, shallowEqual
    )
    const answer6fieldText1 = useSelector(
        (state) => state.arrayDsaSlice.answer6fieldText1, shallowEqual
    )
    const answer6fieldText2 = useSelector(
        (state) => state.arrayDsaSlice.answer6fieldText2, shallowEqual
    )
    const answer6 = useSelector(
        (state) => state.arrayDsaSlice.answer6, shallowEqual
    )
    const answer7 = useSelector(
        (state) => state.arrayDsaSlice.answer7, shallowEqual
    )
    const answer7fieldText = useSelector(
        (state) => state.arrayDsaSlice.answer7fieldText, shallowEqual
    )
    const answer8fieldText = useSelector(
        (state) => state.arrayDsaSlice.answer8fieldText, shallowEqual
    )
    const answer8 = useSelector(
        (state) => state.arrayDsaSlice.answer8, shallowEqual
    )
    const answer9 = useSelector(
        (state) => state.arrayDsaSlice.answer9, shallowEqual
    )
    const answer9fieldText = useSelector(
        (state) => state.arrayDsaSlice.answer9fieldText, shallowEqual
    )
    const handleOnChangeDebounce = (event) => {
        setTimeout(() => {
            handleAnswer(event)
        }, 500);
    }
    const handleAnswer = (event) => {
        if (event === undefined) {
            return
        }
        let currentVal = ''
        let currentChild = event.target.parentElement.children
        for (let i = 0; i < currentChild.length; i++) {
            switch (currentChild[i].classList[0]) {
                case 'array-input':
                    currentVal = {answer1Text: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion1State(currentVal))
                    break;
                case 'field1':
                    currentVal = {answer2field1Text: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion2State1(currentVal))
                    break;
                case 'field2':
                    currentVal = {answer2field2Text: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion2State2(currentVal))
                    break;
                case 'q3-field1':
                    currentVal = {answer3field1Text: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion3State1(currentVal))
                    break;
                case 'q3-field2':
                    currentVal = {answer3field2Text: event.target.parentElement.previousElementSibling.children[1].value}
                    dispatch(setDsaQuestion3State2(currentVal))
                    break;
                case 'q4-field1':
                    currentVal = {answer4FieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion4State(currentVal))
                    break;
                case 'q5-field1':
                    currentVal = {answer5fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion5State(currentVal))
                    break;
                case 'q6-field1':
                    currentVal = {answer6fieldText1: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion6State1(currentVal))
                    break;
                case 'q6-field2':
                    currentVal = {answer6fieldText2: event.target.parentElement.previousElementSibling.children[1].value}
                    dispatch(setDsaQuestion6State2(currentVal))
                    break;
                case 'q7-field':
                    currentVal = {answer7fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion7State(currentVal))
                    break;
                case 'q8-field':
                    currentVal = {answer8fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion8State(currentVal))
                    break;
                case 'q9-field':
                    currentVal = {answer9fieldText: event.target.parentElement.children[i].value}
                    dispatch(setDsaQuestion9State(currentVal))
                    break;
                default:
                    currentVal = {}
                    break;
            }
        }
    }
    const getAnswer1 = () => {
        let array = answer1Text?.split(',')
        let count = 0
        let maxValue = null

        for(let num of array) {
            if (count === 0) {
                maxValue = num
            }
            count += (maxValue === num) ? 1 : -1 
        }
        count = 0
        for(let num of array) {
            if (num === maxValue){
                count += 1
            }
        }

        if (count > array.length/2) {
            return dispatch(setDsaQuestion1Answer({answer1: `The majority element is ${maxValue}`})) 
        } else {
            return dispatch(setDsaQuestion1Answer({answer1: 'No majority element'}))
        }
    }
    const getAnswer2 = () => {
        let isAnagram = answer2field1Text.split('').sort().join('') === answer2field2Text.split('').sort().join('')
        return dispatch(setDsaQuestion2Answer({answer2: `This is an Anagram ${isAnagram}`}))
    }
    const getAnswer3 = () => {
        let numArray = answer3field1Text.split(',')
        let targetVal = answer3field2Text
        let actualElement = ''
        let actualValue = ''
        let sumArray = []
        if (numArray === ''){
            return
        }
        for (let i = 0; i < numArray.length; i++) {
            let differen = targetVal - numArray[i]
            if (differen in sumArray){
                actualElement = [sumArray[differen], i]
                actualValue = [numArray[sumArray[differen]], numArray[i]]
            } else {
                sumArray[numArray[i]] = i
            }
            dispatch(setDsaQuestion3Answer({answer3: `The required two element index is [${actualElement}] and value is ${actualValue}`}))
        }
    }
    const getAnswer4 = () => {
        let inputArray = answer4FieldText.split(',')
        let hashMapGroup = {}
        let groupArrayList = []
        for (let index = 0; index < inputArray.length; index++) {
            if (Object.keys(hashMapGroup).includes(inputArray[index].split('').sort().join(''))) {
                hashMapGroup[inputArray[index].split('').sort().join('')].push(inputArray[index])
            } else {
                hashMapGroup[inputArray[index].split('').sort().join('')] = [inputArray[index]]
            }
            
        }
        for (const key in hashMapGroup) {
            if (Object.hasOwnProperty.call(hashMapGroup, key)) {
                groupArrayList.push(hashMapGroup[key])
            }
        }
        dispatch(setDsaQuestion4Answer({answer4: `The Grouped Anagram is [${groupArrayList}]`}))
    }
    const getAnswer5 = () => {
        let inputNumArray = answer5fieldText.split(',')
        let maxNegativeNum = -Math.pow(2, 52)
        let maxSofar = maxNegativeNum - 1
        let setMaxNum = 0
        for (let index = 0; index < inputNumArray.length; index++) {
            const element = inputNumArray[index]
            setMaxNum = setMaxNum + Number(element)
            if (maxSofar < setMaxNum) {
                maxSofar = setMaxNum
            }
            if (setMaxNum < 0) {
               setMaxNum = 0 
            }   
        }
        dispatch(setDsaQuestion5Answer({answer5: `Maximum contiguous sum is ${maxSofar}`}))
    }
    const getAnswer6 = () => {
        let groupObj = {}
        let fieldArray = answer6fieldText1.split(',')
        let count = 1
        for (let i = 0; i < fieldArray.length; i++) {
            if (Object.keys(groupObj).includes(fieldArray[i].toString())) {
                groupObj[fieldArray[i]] = groupObj[fieldArray[i]] + 1
            } else {
                groupObj[fieldArray[i]] = count
            } 
        }
        const groupList = Object.keys(groupObj).sort( (a, b) => {return groupObj[b] - groupObj[a]})
        let finalList = groupList.slice(0, answer6fieldText2)
        dispatch(setDsaQuestion6Answer({answer6: `The most repetative ${answer6fieldText2} number in array [${fieldArray}] is [${finalList}]`}))
    }
    const getAnswer7 = (event) => {
        let inputFieldArray = answer7fieldText.split(',')
        let productArray = []
        let selectTimeComplexity = event.currentTarget.parentElement.previousElementSibling.children[1].value
        if (selectTimeComplexity === 'O(n^2)') {
            for (let i = 0; i < inputFieldArray.length; i++) {
                const element = inputFieldArray[i]
                let filterArray = inputFieldArray.filter( (item) => {return item !== element})
                productArray.push(filterArray.reduce( (a, b) => {return a * b}))  
            }
        } else {
            let productValue = 1
            for (let i = 0; i < inputFieldArray.length; i++) {
                productArray[i] = productValue
                productValue *= inputFieldArray[i]
            }
            productValue = 1
            for (let i = inputFieldArray.length - 1; i >= 0; i--) {
                productArray[i] *= productValue
                productValue *= inputFieldArray[i]
            }
        }
        dispatch(setDsaQuestion7Answer({answer7: `The Product array is [${productArray}]`}))
    }
    const getAnswer8 = () => {
        const board = answer8fieldText
        let seenRow = new Array(9).fill().map( () => new Array(10).fill(false)) //Note: creating 9 X 10 grid array because 0 is not accetable in sudoku. here each no cintaion false value by default.
        let seenCol = new Array(9).fill().map( () => new Array(10).fill(false))
        let seenSubGrid = new Array(9).fill().map( () => new Array(10).fill(false))

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = parseInt(board[i][j])
                const subGridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (seenRow[i][num] || seenCol[j][num] || seenSubGrid[subGridIndex][num]) {
                    return dispatch(setDsaQuestion8Answer({answer8: `This is not Valid Sudoku Board`}))
                }
                
            }
        }
        return dispatch(setDsaQuestion8Answer({answer8: `This is Valid Sudoku Board`}))
    }
    const getAnswer9 = () => {
        const unsortedArray = answer9fieldText
        let longestSequenceElement = 0
        const visited = {}
        let currentSequence = 0
        
        for (let number of unsortedArray) {
            visited[number] = true
        }
        for (let i = 0; i < unsortedArray.length; i++) {
            if (!visited[unsortedArray[i] - 1]) {
                let currentNum = unsortedArray[i]
                currentSequence = 1

                while (visited[currentNum + 1]) {
                    currentNum++
                    currentSequence++
                }
            }
            longestSequenceElement = Math.max(longestSequenceElement, currentSequence) 
        }
        dispatch(setDsaQuestion9Answer({answer9: `Longest consecutive element length are ${longestSequenceElement}`}))
    } 
    return (
        <>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Array & Hashing</Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey={['0']}>
                            <Accordion.Item eventKey='0'>
                            <Accordion.Header>Question 1</Accordion.Header>
                            <Accordion.Body>
                            <h6>Find the element which occurs more than n/2 times in the given array using time complexity of O(n)</h6>
                            <input type='text' className='array-input' defaultValue={answer1Text} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'>
                                <button onClick={getAnswer1} defaultValue={answer1}>Answer1: {answer1}</button>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='1'>
                            <Accordion.Header>Question 2</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given two input field field1 and field 2. validate field1 is Anagram of field2 or not?</h6>
                            <div><label className='col-sm-1'>field1: </label><input type='text' className='field1' defaultValue={answer2field1Text} onChange={handleOnChangeDebounce}/></div>
                            <div className='div-padding'><label className='col-sm-1'>field2: </label><input type='text' className='field2' defaultValue={answer2field2Text} onChange={handleOnChangeDebounce}/></div>
                            <div className='div-padding'><button onClick={getAnswer2} defaultValue={answer2}>Answer2: {answer2}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='2'>
                            <Accordion.Header>Question 3</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an array of integer in field1 and an integer in field2, return indices of the two number such that they add up to field2 value.</h6>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q3-field1' defaultValue={answer3field1Text} onChange={handleOnChangeDebounce}/>
                            <div className='q3-field2 div-padding'><label className='col-sm-1'>field2: </label><input type='text' className='q3-field2' defaultValue={answer3field2Text} onChange={handleOnChangeDebounce}/></div>
                            <div className='div-padding'><button onClick={getAnswer3} defaultValue={answer3}>Answer3: {answer3}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='3'>
                            <Accordion.Header>Question 4</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an array of String in field1, group the Anagram together.</h6>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q4-field1' defaultValue={answer4FieldText} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'><button onClick={getAnswer4} defaultValue={answer4}>Answer4: {answer4}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='4'>
                            <Accordion.Header>Question 5</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an array of Number in field1, find the sub-array whose sum is the largest(Kadane's Algorithm).</h6>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q5-field1' defaultValue={answer5fieldText} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'><button onClick={getAnswer5} defaultValue={answer5}>Answer5: {answer5}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='5'>
                            <Accordion.Header>Question 6</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an array of Number in field1, find the repetative number on the basis of parameter provided.</h6>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q6-field1' defaultValue={answer6fieldText1} onChange={handleOnChangeDebounce}/>
                            <div className='q6-field2 div-padding'><label className='col-sm-1'>field2: </label><input type='text' className='q6-field2' defaultValue={answer6fieldText2} onChange={handleOnChangeDebounce}/></div>
                            <div className='div-padding'><button onClick={getAnswer6} defaultValue={answer6}>Answer6: {answer6}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='6'>
                            <Accordion.Header>Question 7</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an array of Number, return an array in such that the answer[i] is equal to the product of all the element except nums[i].</h6>
                            <label className='col-sm-2'>field1: </label><input type='text' className='q7-field' defaultValue={answer7fieldText} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'><label className='col-sm-2'> Time complexity: </label>
                            <select className='time-complexity-select' onChange={handleOnChangeDebounce}>
                                <option value={'O(n)'}>O(n)</option>
                                <option value={'O(n^2)'}>O(n^2)</option>
                            </select></div>
                            <div className='div-padding'><button onClick={getAnswer7} defaultValue={answer7}>Answer7: {answer7}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='7'>
                            <Accordion.Header>Question 8</Accordion.Header>
                            <Accordion.Body>
                            <h6>Determine if a 9 X 9 Suduko board is valid. Only the filled cells need to be validated according to the gollowing 3 rules: </h6>
                            <div><label>1. Each row must contain the digits 1-9 without repetition</label><br></br>
                            <label>2. Each column must contain the digit 1-9 without repetition</label>
                            <label>3. Each of the nine 3 X 3 sub-grid must contain the digit 1-9 without repetition</label></div>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q8-field input-width' defaultValue={answer8fieldText} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'><button onClick={getAnswer8} defaultValue={answer8}>Answer8: {answer8}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey='8'>
                            <Accordion.Header>Question 9</Accordion.Header>
                            <Accordion.Body>
                            <h6>Given an unsorted array of integer in field1, return the length of the longest consecutive elements sequence. solve this in O(n) time and space complexity dont use sort method.</h6>
                            <label className='col-sm-1'>field1: </label><input type='text' className='q9-field' defaultValue={answer9fieldText} onChange={handleOnChangeDebounce}/>
                            <div className='div-padding'><button onClick={getAnswer9} defaultValue={answer9}>Answer9: {answer9}</button></div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
    }

 
export default ArrayHashing;