import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {InputData} from '../../components/inputsComp'
interface InputState {
    inputs: Array<InputData>;
}

const initialState: InputState = {
    inputs: [],
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        addInput: (state: InputState, action: PayloadAction<InputData>) => {
            state.inputs.push(action.payload);
        },
        updateInput: (state: InputState, action: PayloadAction<{ id: string; value: string }>) => {
            const { id, value } = action.payload;

            const index = state.inputs.findIndex(input => input.id === id);
            state.inputs[index].value = value;
        },

        removeInput: (state: InputState, action: PayloadAction<string>) => {
            state.inputs = state.inputs.filter(input => input.id !== action.payload);
        },
        clearInputs: (state: InputState) => {
            state.inputs = [];
        },
    },
});

export const { addInput, updateInput, removeInput, clearInputs } = inputSlice.actions;

export const inputReducer = inputSlice.reducer;