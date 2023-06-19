import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from "../../store/types"
import Button from "../Button"
import BackButton from "../BackButton"
import {
    removeInput,
    updateInput,
} from "../../store/slices/twoFormSlice"
import InputList from '../inputsComp'
import {CheckBox} from "../CheckBox"
import {RadioBox} from "../RadioBox"

function TwoFormComponent({setActiveStep, activeStep}: {
    setActiveStep: (value: number) => void,
    activeStep: number
}) {
    const inputs = useSelector((state: RootState) => state.twoForm.inputs);
    const dispatch = useDispatch();
    const backClick = () => {
        setActiveStep(activeStep - 1)
    }
    const goNext = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <>
            <div className="mt-[24px] mb-[8px]">Преимущества</div>
            <InputList
                initialValues={inputs}
                onValueChange={(id, value) => dispatch(updateInput({id, value}))}
                onFieldRemove={id => dispatch(removeInput(id))}
            />
            <div className="mt-[20px] mb-[8px]">Checkbox group</div>
            <CheckBox/>
            <div className="mt-[20px] mb-[8px]">Radio group</div>
            <RadioBox/>
            <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 mt-[70px]">
                <BackButton className="col-span-2  text-white" onClick={backClick}>Назад</BackButton>
                <Button className="col-span-2 col-start-5 sm:col-start-5 md:col-start-5 lg:col-start-7 xl:col-start-11 text-white" onClick={goNext} type="submit">Вперед</Button>
            </div>
        </>
    );
}

export default TwoFormComponent;