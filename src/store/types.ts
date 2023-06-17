import {InputData} from "../components/inputsComp"

export interface RootState {
    home: {
        phoneNumber: string,
        email: string,
    },
    firstForm: {
        nickname: string,
        name: string,
        surname: string,
        sex: string,
    },
    twoForm: {
        inputs: Array<InputData>,
        checked1: boolean,
        checked2: boolean,
        checked3: boolean,
        selectedValue: string,
    },
    threeForm: {
        textAbout: string,
    }

}