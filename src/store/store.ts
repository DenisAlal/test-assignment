import {configureStore} from '@reduxjs/toolkit'
import {homeReducer} from "./slices/homeSlice"
import {twoFormReducer} from "./slices/twoFormSlice"
import {firstFormReducer} from "./slices/firstFormSlice"
import {threeFormReducer} from "./slices/threeFormSlice"

const store = configureStore({
    reducer: {
        home: homeReducer,
        firstForm: firstFormReducer,
        twoForm: twoFormReducer,
        threeForm: threeFormReducer,
    },
});
export default store