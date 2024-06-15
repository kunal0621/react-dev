import { createSlice } from "@reduxjs/toolkit"

export const dsaQuestionReducer = createSlice({
    name: "twoPointerDsaQuestionState",
    initialState: {
        answer1fieldText: 'A man, a plan, a canal: Panama',
        answer1 : '',
        answer2field1Text: [3, 6, 8, 10, 16, 17],
        answer2field2Text: 16,
        answer2: '',
        answer3fieldText: [-1, 0, 1, 2, -1, -4],
        answer3: '',
        answer4: '',
        answer4FieldText: 'eat,tea,tan,ate,nat,bat',
        answer5: '',
        answer5fieldText: '-2,-3,4,-1,-2,1,5,-3',
        answer6: '',
        answer6fieldText1: '3,2,2,3,2,1,4',
        answer6fieldText2: 2,
        answer7: '',
        answer7fieldText: '1,3,5,6,4',
        answer8: '',
        answer8fieldText: [['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']],
        answer9: '',
        answer9fieldText: [0,3,7,2,5,8,4,6,0,1]
    },
    reducers: {
        setDsaQuestion1State(state, action) {
            state.answer1Text = action.payload.answer1Text
        },
        setDsaQuestion1Answer(state, action) {
            state.answer1 = action.payload.answer1
        },
        setDsaQuestion2Answer(state, action) {
            state.answer2 = action.payload.answer2
        },
        setDsaQuestion2State1(state, action) {
            state.answer2field1Text = action.payload.answer2field1Text
        },
        setDsaQuestion2State2(state, action) {
            state.answer2field2Text = action.payload.answer2field2Text
        },
        setDsaQuestion3Answer(state, action) {
            state.answer3 = action.payload.answer3
        },
        setDsaQuestion3State(state, action) {
            state.answer3fieldText = action.payload.answer3fieldText
        },
        setDsaQuestion4Answer(state, action) {
            state.answer4 = action.payload.answer4
        },
        setDsaQuestion4State(state, action) {
            state.answer4FieldText = action.payload.answer4FieldText
        },
        setDsaQuestion5Answer(state, action) {
            state.answer5 = action.payload.answer5
        },
        setDsaQuestion5State(state, action) {
            state.answer5fieldText = action.payload.answer5fieldText
        },
        setDsaQuestion6Answer(state, action) {
            state.answer6 = action.payload.answer6
        },
        setDsaQuestion6State1(state, action) {
            state.answer6fieldText1 = action.payload.answer6fieldText1
        },
        setDsaQuestion6State2(state, action) {
            state.answer6fieldText2 = action.payload.answer6fieldText2
        },
        setDsaQuestion7Answer(state, action) {
            state.answer7 = action.payload.answer7
        },
        setDsaQuestion7State(state, action) {
            state.answer7fieldText = action.payload.answer7fieldText
        },
        setDsaQuestion8Answer(state, action) {
            state.answer8 = action.payload.answer8
        },
        setDsaQuestion8State(state, action) {
            state.answer8fieldText = action.payload.answer8fieldText
        },
        setDsaQuestion9Answer(state, action) {
            state.answer9 = action.payload.answer9
        },
        setDsaQuestion9State(state, action) {
            state.answer9fieldText = action.payload.answer9fieldText
        }
    }
});
export const {
    setDsaQuestion1State, setDsaQuestion1Answer, setDsaQuestion2Answer, setDsaQuestion2State1, setDsaQuestion2State2,setDsaQuestion3Answer,setDsaQuestion3State, setDsaQuestion4Answer, setDsaQuestion4State, setDsaQuestion5Answer, setDsaQuestion5State, setDsaQuestion6Answer, setDsaQuestion6State1, setDsaQuestion6State2, setDsaQuestion7Answer, setDsaQuestion7State, setDsaQuestion8Answer, setDsaQuestion8State, setDsaQuestion9Answer, setDsaQuestion9State
} = dsaQuestionReducer.actions;
export default dsaQuestionReducer.reducer;