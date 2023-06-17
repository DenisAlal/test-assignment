import {createSlice} from "@reduxjs/toolkit"

export interface HomeState {
    phoneNumber: string;
    email: string;
}

const initialState: HomeState = {
    phoneNumber: '',
    email: '',
};
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        savePhone: (state, action) => {
            state.phoneNumber = action.payload
        },
        saveEmail: (state, action) => {
            state.email = action.payload
        },
        clearHomeData: (state) => {
            state.phoneNumber = ""
            state.email = ""
        }
    },
});

export const {savePhone, saveEmail,clearHomeData} = homeSlice.actions;

export const homeReducer = homeSlice.reducer;