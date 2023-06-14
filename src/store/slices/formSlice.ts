import { createSlice } from '@reduxjs/toolkit';

export interface FormState {
    fieldOne: string;
    fieldTwo: string;
    fieldThree: string;

}

const initialState: FormState = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: '',

};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        // экшен для сохранения данных первого шага
        saveStepOne: (state, action) => {
            state.fieldOne = action.payload;
        },

        // экшен для сохранения данных второго шага
        saveStepTwo: (state, action) => {
            state.fieldTwo = action.payload;
        },

        // экшен для сохранения данных третьего шага
        saveStepThree: (state, action) => {
            state.fieldThree = action.payload;
        },

    },
});

export const { saveStepOne, saveStepTwo, saveStepThree } = formSlice.actions;

export const formReducer = formSlice.reducer;