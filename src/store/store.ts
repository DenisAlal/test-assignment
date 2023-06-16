import {configureStore} from '@reduxjs/toolkit';
import {formReducer} from './slices/formSlice';
import {homeReducer} from "./slices/homeSlice";
import {inputReducer} from "./slices/inputSlice"

const store = configureStore({
    reducer: {
        form: formReducer,
        home: homeReducer,
        input: inputReducer,

    },
});

export default store;