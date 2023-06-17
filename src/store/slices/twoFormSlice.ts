import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {InputData} from '../../components/inputsComp'

interface InputState {
    inputs: Array<InputData>;
    checked1: boolean
    checked2: boolean
    checked3: boolean
    selectedValue: string
}

const initialState: InputState = {
    inputs: [],
    checked1: false,
    checked2: false,
    checked3: false,
    selectedValue: "option1"
};

export const twoFormSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        addInput: (state: InputState, action: PayloadAction<InputData>) => {
            state.inputs.push(action.payload)
        },
        updateInput: (state: InputState, action: PayloadAction<{ id: string; value: string }>) => {
            const { id, value } = action.payload
            const index = state.inputs.findIndex(input => input.id === id)
            state.inputs[index].value = value
        },
        removeInput: (state: InputState, action: PayloadAction<string>) => {
            state.inputs = state.inputs.filter(input => input.id !== action.payload)
        },
        setChecked1: (state, action: PayloadAction<boolean>) => {
            state.checked1 = action.payload
        },
        setChecked2: (state, action: PayloadAction<boolean>) => {
            state.checked2 = action.payload
        },
        setChecked3: (state, action: PayloadAction<boolean>) => {
            state.checked3 = action.payload
        },
        selectValue: (state, action: PayloadAction<string>) => {
            state.selectedValue = action.payload
        },
        clearTwoFormData: (state: InputState) => {
            state.inputs = [];
            state.checked1 = false
            state.checked2 = false
            state.checked3 = false
            state.selectedValue = "option1"
        },
    },
});

export const { addInput, updateInput,
    removeInput, clearTwoFormData,
    setChecked1, setChecked2,
    setChecked3, selectValue } = twoFormSlice.actions;

export const twoFormReducer = twoFormSlice.reducer;