import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveStepTwo} from '../../store/slices/formSlice';
import {RootState} from "../../store/types";
import Button from "../Button";
import {useNavigate} from "react-router-dom";
import BackButton from "../BackButton";
import { removeInput, updateInput} from "../../store/slices/inputSlice";
import InputList from  '../inputsComp'
interface CheckboxProps {
    id: string;
    isDefaultChecked?: boolean;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
       id,
       isDefaultChecked = false,
       label,
   }) => {
    const [isChecked, setIsChecked] = useState(isDefaultChecked);
    return (
        <div className="flex mt-2">
            <div className="flex items-center h-5">
                <input
                    id={id}
                    name={id}
                    type="checkbox"
                    className="focus:ring-[#5558FA] h-4 w-4 text-indigo-600 rounded bg-[#5558FA] border-[#5558FA]"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="text-gray-700">
                    {label}
                </label>
            </div>
        </div>
    );
};

function TwoFormComponent({setActiveStep, activeStep}: {
    setActiveStep: (value: number) => void,
    activeStep: number
}) {
    const inputs = useSelector((state: RootState) => state.input.inputs);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const stepTwo = useSelector((state: RootState) => state.form.fieldTwo);
    const [yupError, setYupError] = useState(false);

    const [selectedValue, setSelectedValue] = useState('option1')
    const radioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value)
    }
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepTwo(event.target.value));
        },
        [dispatch],
    );

    const backClick = () => {
        if (activeStep === 1) {
            navigate("/");
        } else {
            setActiveStep(activeStep - 1)
        }


    }
    const goNext = () => {
        if (!yupError) {
            setActiveStep(activeStep + 1)
            setYupError(false)
        }
        setYupError(false)
    }
    return (
        <>
            <div className="mt-[24px] mb-[8px]">Преимущества</div>
            <InputList
                initialValues={inputs}
                onValueChange={(id, value) => dispatch(updateInput({ id, value }))}
                onFieldRemove={id => dispatch(removeInput(id))}
            />

            <div className="mt-[20px] mb-[8px]">Checkbox group</div>
                <Checkbox id="checkbox-1" label="Checkbox 1"/>
                <Checkbox id="checkbox-2" label="Checkbox 2"/>
                <Checkbox id="checkbox-3" label="Checkbox 3"/>
            <div className="mt-[20px] mb-[8px]">Radio group</div>
            <div>
                <label htmlFor="option1" className="flex items-center">
                    <input
                        type="radio"
                        id="option1"
                        name="myOptions"
                        value="option1"
                        checked={selectedValue === 'option1'}
                        onChange={radioChange}
                        className="hidden"
                    />
                    <span
                        className={`${selectedValue === 'option1' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option1' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>
                      )}
                    </span>
                    <span className="ml-2 text-gray-700">1</span>
                </label>
                <label htmlFor="option2" className="flex items-center">
                    <input
                        type="radio"
                        id="option2"
                        name="myOptions"
                        value="option2"
                        checked={selectedValue === 'option2'}
                        onChange={radioChange}
                        className="hidden"
                    />
                    <span
                        className={`${selectedValue === 'option2' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option2' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>
                      )}
                    </span>
                    <span className="ml-2 text-gray-700">2</span>
                </label>
                <label htmlFor="option3" className="flex items-center">
                    <input
                        type="radio"
                        id="option3"
                        name="myOptions"
                        value="option3"
                        checked={selectedValue === 'option3'}
                        onChange={radioChange}
                        className="hidden"
                    />
                    <span
                        className={`${selectedValue === 'option3' ? 'bg-[#5558FA] border-[#5558FA]' : 'bg-white border-gray-300'} flex items-center justify-center w-4 h-4 border rounded-full transition-colors`}>
                      {selectedValue === 'option3' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="currentColor"
                               className="bi bi-dot bg-white rounded-full" viewBox="0 0 16 16">
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="white"></path>
                          </svg>

                      )}
                    </span>
                    <span className="ml-2 text-gray-700">3</span>
                </label>
            </div>

            <div className=" grid grid-cols-12 mt-[70px]">
                <BackButton className="col-span-2  text-white" onClick={backClick}>Назад</BackButton>
                <Button className="col-span-2 col-start-11 text-white" onClick={goNext} type="submit">Вперед</Button>
            </div>

        </>

    );
}

export default TwoFormComponent;