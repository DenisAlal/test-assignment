import {configureStore} from '@reduxjs/toolkit';
import {formReducer} from './slices/formSlice';
import {homeReducer} from "./slices/homeSlice";
const store = configureStore({
    reducer: {
        form: formReducer,
        home: homeReducer,
    },
});

export default store;