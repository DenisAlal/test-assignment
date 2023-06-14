import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveStepThree } from '../../store/slices/formSlice';
import {RootState} from "../../store/types";

interface StepThreeProps {}

const ThreeFormComponent: React.FC<StepThreeProps> = ({}) => {
    const dispatch = useDispatch();
    const stepThree = useSelector((state: RootState)=> state.form.fieldThree);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepThree(event.target.value));
        },
        [dispatch],
    );

    return (
        <div>
            <label>three</label>
            <input type="text" value={stepThree} onChange={handleChange} className="ml-5"/>
        </div>
    );
};

export default ThreeFormComponent;