import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface InputState {
    textAbout: string
}

const initialState: InputState = {
    textAbout: "",
};
export const threeFormSlice = createSlice({
    name: 'threeForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.textAbout = action.payload
        },
        clearText: (state) => {
            state.textAbout = ""
        },
    },
});

export const { setText,clearText} = threeFormSlice.actions;

export const threeFormReducer = threeFormSlice.reducer;