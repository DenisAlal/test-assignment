import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    MainContainer,
    ButtonsContainer,
    StepContainer,
    StepCount,
    StepStyle,
    StepWrapper,
    ButtonStyle,
    CheckMark
} from './stepProgress'
import BackButton from "../components/backButton";
import Selector from "../components/selector";

const steps = [
    {
        step: 1,
    },
    {
        step: 2,
    },
    {
        step: 3,
    },
]


function Create() {


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const Schema = yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegExp, 'Номер телефона введен неверно!'),
        email: yup.string().email('Электронная почта введена не верно!').required('Электронная почта введена неверно!'),
    });

    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(Schema)
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        navigate('/create');
    };


    const [activeStep, setActiveStep] = React.useState(1)

    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const prevStep = () => {
        setActiveStep(activeStep - 1)
    }

    const totalSteps = steps.length

    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`
    return (

        <div
            className="absolute left-1/2 transform -translate-x-1/2 max-w-[900px] min-w-[340px] sm:w-[400px] lg:w-[600px] lg:h-[600px] xl:w-[900px] xl:h-[704px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="m-[50px]">
                <Link to="/" className="text-blue-700 underline underline-offset-8">go Home</Link>
                <MainContainer>
                    <StepContainer width={width}>
                        {steps.map(({step}) => (
                            <StepWrapper  key={step} >
                                <StepStyle  step={activeStep >= step ? 'completed' : 'incomplete'}>
                                    {activeStep > step ? (
                                        <CheckMark >L</CheckMark>
                                    ) : (
                                        <></>
                                    )}
                                </StepStyle>
                            </StepWrapper>
                        ))}
                    </StepContainer>
                    <ButtonsContainer>
                        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
                            Previous
                        </ButtonStyle>
                        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
                            Next
                        </ButtonStyle>
                    </ButtonsContainer>
                </MainContainer>
                <BackButton>Назад</BackButton>
                <Selector>
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </Selector>
            </form>
        </div>


    )
}

export default Create