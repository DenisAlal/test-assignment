import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveStepTwo } from '../../store/slices/formSlice';
import {RootState} from "../../store/types";

interface StepTwoProps {}

const TwoFormComponent: React.FC<StepTwoProps> = ({}) => {
    const dispatch = useDispatch();
    const stepTwo = useSelector((state: RootState) => state.form.fieldTwo);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepTwo(event.target.value));
        },
        [dispatch],
    );

    return (
        <div>
            <label>two</label>
            <input type="text" value={stepTwo} onChange={handleChange} className="ml-5"/>
        </div>
    );
};

export default TwoFormComponent;