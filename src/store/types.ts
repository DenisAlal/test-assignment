import {InputData} from "../components/inputsComp";

export interface RootState {
    form: {
        fieldOne: string,
        fieldTwo: string,
        fieldThree: string,
    },
    home: {
        phoneNumber: string,
        email: string,
    },
    input: {
        inputs: Array<InputData>,
    },

}