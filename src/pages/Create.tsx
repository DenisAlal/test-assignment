import React, {useRef, useState} from "react";
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
import BackButton from "../components/BackButton";
import Button from "../components/Button";
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
    const [modal, setModal] = useState(false);
    const [modalError, setModalError] = useState(false);


    const openModal = () => {
        setModal(true);
    };

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


    const backClick = () => {
        if (activeStep === 1) {
            navigate("/");
        } else {
            setActiveStep(activeStep - 1)
        }
    }
    let buttonNext;

    const goNext = () => {
        if (activeStep === 3) {
            navigate("/");
        } else {
            setActiveStep(activeStep + 1)
        }
    }


    if (activeStep !== 3) {
        buttonNext = <Button className="col-span-2 col-start-11 text-white" onClick={goNext}>Вперед</Button>;
    } else {
        buttonNext = <Button className="col-span-2 col-start-11 text-white" onClick={openModal}>Отправить</Button>;
    }


    const totalSteps = steps.length

    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`
    return (
        <>
            <div
                className="absolute left-1/2 transform -translate-x-1/2 max-w-[900px] min-w-[340px] sm:w-[400px] lg:w-[600px] lg:h-[600px] xl:w-[900px] xl:h-[704px] bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="m-[50px]">

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


                    {activeStep === 1 && <FirstFormComponent/>}
                    {activeStep === 2 && <TwoFormComponent/>}
                    {activeStep === 3 && <ThreeFormComponent/>}
                    <div className=" grid grid-cols-12">
                        <BackButton className="col-span-2  text-white" onClick={backClick}>Назад</BackButton>
                        {buttonNext}
                    </div>
                </form>
            </div>
            {modal ? (<>
                    <Modal setValue={setModal} modalError={modalError} />
                </>
            ) : null}

        </>


    )
}

export default Create