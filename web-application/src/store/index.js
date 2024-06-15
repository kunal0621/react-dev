import { configureStore, combineReducers } from '@reduxjs/toolkit';
import arrayDsaSlice from './dsaQuestionSlice/array-dsa-slice';
import twoPointerSlice from './dsaQuestionSlice/two-pointer-slice';

const reducer = combineReducers({
    arrayDsaSlice,
    twoPointerSlice
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store