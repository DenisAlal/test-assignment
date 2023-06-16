import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveStepThree} from '../../store/slices/formSlice';
import {RootState} from "../../store/types";
import Button from "../Button";
import {useNavigate} from "react-router-dom";
import BackButton from "../BackButton";
import Modal from "../Modal";
import axios from 'axios';

function ThreeFormComponent({setActiveStep, activeStep, setOpenModal, setModalError}: {
    setActiveStep: (value: number) => void,
    activeStep: number,
    setOpenModal: (value: boolean) => void,
    setModalError: (value: boolean) => void,
}) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const stepThree = useSelector((state: RootState) => state.form.fieldThree);
    const [yupError, setYupError] = useState(false);
    const [value, setValue] = useState('')
    const [count, setCount] = useState(0)
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveStepThree(event.target.value));
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


    const openModal = () => {

        sendRequest()
    };

    let buttonNext;

    const goNext = () => {

        if (!yupError) {
            if (activeStep === 3) {
                navigate("/");
            } else {
                setActiveStep(activeStep + 1)
            }
            setYupError(false)
        }
        setYupError(false)
    }
    const requestBody = {

    };

    const sendRequest = () => {
        axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', requestBody)
            .then(response => {
                console.log(response.data);
                if(response.data.status === 'success'){
                    setModalError(false);
                    setOpenModal(true);
                }
            })
            .catch(error => {
                console.error(error);
                setModalError(false);
                setOpenModal(true);
            });
    }
    const ChangeArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setValue(value)
        setCount(value.replace(/\s+/g, '').length)
    }

    if (activeStep !== 3) {
        buttonNext =
            <Button className="col-span-2 col-start-11 text-white" onClick={goNext} type="submit">Вперед</Button>;
    } else {
        buttonNext =
            <Button className="col-span-2 col-start-11 text-white" onClick={openModal} type="submit">Отправить</Button>;
    }
    return (
        <>
            <div className="mt-[24px] mb-[8px]">О мне</div>
            <textarea className="w-full border-[#d6d6d6s] border border-solid rounded-[4px] min-h-[84px] p-[12px]" value={value} onChange={ChangeArea} maxLength={200} placeholder="Информация о вас"></textarea>
            <div className="w-full text-right">
                {/*{errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}*/}
                <span >{`Символов без пробелов: ${count}`}</span>
            </div>
            <div className=" grid grid-cols-12 mt-[78px]">
                <BackButton className="col-span-2  text-white" onClick={backClick}>Назад</BackButton>
                {buttonNext}
            </div>
        </>

    );
}

export default ThreeFormComponent;