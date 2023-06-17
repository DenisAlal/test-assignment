import { createSlice } from '@reduxjs/toolkit'

export interface FirstFormState {
    nickname: string
    name: string
    surname: string
    sex: string
}

const initialState: FirstFormState = {
    nickname: '',
    name: '',
    surname: '',
    sex: '',
};

export const firstFormSlice = createSlice({
    name: 'firstForm',
    initialState,
    reducers: {
        saveNickname: (state, action) => {
            state.nickname = action.payload
        },
        saveName: (state, action) => {
            state.name = action.payload
        },
        saveSurname: (state, action) => {
            state.surname = action.payload
        },
        saveSex: (state, action) => {
            state.sex = action.payload
        },
        clearFirstFormData: (state: FirstFormState) => {
            state.nickname = ""
            state.name = ""
            state.surname = ""
            state.sex = ""
        },
    },
});

export const { saveNickname ,
    saveName,saveSurname,
    saveSex,clearFirstFormData} = firstFormSlice.actions;

export const firstFormReducer = firstFormSlice.reducer;