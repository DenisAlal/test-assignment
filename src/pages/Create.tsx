import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    StepContainer,
    StepStyle,
    StepWrapper,
    CheckMark
} from './StepProgress'
import FirstFormComponent from "../components/form/FirstFormComponent";
import TwoFormComponent from "../components/form/TwoFormComponent";
import ThreeFormComponent from "../components/form/ThreeFormComponent";
import Modal from "../components/Modal";


const steps = [
    {step: 1,},
    {step: 2,},
    {step: 3,},
]


function Create() {

    let navigate = useNavigate();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const Schema = yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegExp, 'Номер телефона введен неверно!'),
        email: yup.string().email('Электронная почта введена не верно!').required('Электронная почта введена неверно!'),
    });
    const [activeStep, setActiveStep] = React.useState(1)
    const [modal, setModal] = useState(false);
    const [modalError, setModalError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(Schema)
    });


    const totalSteps = steps.length
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

    return (
        <>
            <div
                className="absolute left-1/2 transform -translate-x-1/2 max-w-[900px] min-w-[340px] sm:w-[400px] lg:w-[600px] xl:w-[900px] bg-white">
                <div className="m-[50px]">
                    <StepContainer width={width}>
                        {steps.map(({step}) => (
                            <StepWrapper key={step}>
                                <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
                                    {activeStep > step ? (
                                        <CheckMark>L</CheckMark>
                                    ) : (
                                        <></>
                                    )}
                                </StepStyle>
                            </StepWrapper>
                        ))}
                    </StepContainer>
                    {activeStep === 1 && <FirstFormComponent activeStep={activeStep} setActiveStep={setActiveStep}/>}
                    {activeStep === 2 && <TwoFormComponent activeStep={activeStep} setActiveStep={setActiveStep}/>}
                    {activeStep === 3 && <ThreeFormComponent activeStep={activeStep} setActiveStep={setActiveStep} setOpenModal={setModal}  setModalError={setModalError}/>}
                </div>
            </div>
            {modal ? (<>
                    <Modal setValue={setModal} modalError={modalError}/>
                </>
            ) : null}
        </>


    )
}

export default Create