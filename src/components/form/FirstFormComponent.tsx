import React, {forwardRef, useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveStepOne} from '../../store/slices/formSlice';
import {RootState} from "../../store/types";
import Selector from "../Selector";
import Input from "../Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackButton from "../BackButton";
import {useNavigate} from "react-router-dom";
import Button from "../Button";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignInSchema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegExp, 'Номер телефона введен неверно!'),
    email: yup.string().email('Электронная почта введена не верно!').required('Электронная почта введена неверно!'),
});

function FirstFormComponent({setActiveStep, activeStep}: {
    setActiveStep: (value: number) => void,
    activeStep: number
}) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const stepOne = useSelector((state: RootState) => state.form.fieldOne);
    const [yupError, setYupError] = useState(false);
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepOne(event.target.value));
        },
        [dispatch],
    );
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(SignInSchema)
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
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


    return (<>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[100px]">
                <div className="mt-[100px] mb-[8px]">Логин</div>
                <Input {...register("email")} type="text" placeholder="Ivan_ivanov"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"/>
                {errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}
                <div className="mt-[48px] mb-[8px]">Имя пользователя</div>
                <Input {...register("email")} type="text" placeholder="Иван"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"/>
                {errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}
                <div className="mt-[48px] mb-[8px]">Фамилия пользователя</div>
                <Input {...register("email")} type="text" placeholder="Иванов"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"/>
                {errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}
                <div className="mt-[48px] ">Пол</div>
                <Selector>
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </Selector>
                <input type="text" value={stepOne} onChange={handleChange} className="ml-5"/>
            </form>
            <div className="grid grid-cols-12 mt-[88px]">
                <BackButton className="col-span-2  text-white " onClick={backClick}>Назад</BackButton>
                <Button className="col-span-2 col-start-11 text-white" onClick={goNext} type="submit">Вперед</Button>
            </div>
        </>
    );
}

export default FirstFormComponent;