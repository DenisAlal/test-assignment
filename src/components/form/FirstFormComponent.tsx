import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveStepOne } from '../../store/slices/formSlice';
import {RootState} from "../../store/types";



const StepOne = () => {
    const dispatch = useDispatch();
    const stepOne = useSelector((state: RootState) => state.form.fieldOne);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepOne(event.target.value));
        },
        [dispatch],
    );

    return (
        <div>
            <label>first</label>
            <input type="text" value={stepOne} onChange={handleChange} className="ml-5"/>
        </div>
    );
};

export default StepOne;