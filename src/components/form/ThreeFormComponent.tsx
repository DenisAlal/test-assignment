import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from "../../store/types"
import Button from "../Button"
import BackButton from "../BackButton"
import axios from 'axios'
import {setText} from "../../store/slices/threeFormSlice"

function ThreeFormComponent({setActiveStep, activeStep, setOpenModal, setModalError}: {
    setActiveStep: (value: number) => void,
    activeStep: number,
    setOpenModal: (value: boolean) => void,
    setModalError: (value: boolean) => void,
}) {
    const dispatch = useDispatch()
    const getText = useSelector((state: RootState) => state.threeForm.textAbout)
    const [value, setValue] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() => {
        setValue(getText)
    }, [getText]);

    const backClick = () => {
        setActiveStep(activeStep - 1)
    }
    const openModal = () => {
        sendRequest()
    };

    const info = useSelector((state: RootState) => state);
    const sendRequest = () => {
        const dataToBodyReq = JSON.stringify(info)
        const requestBody = {dataToBodyReq};
        console.log(requestBody)
        axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', requestBody)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 'success') {
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
    const ChangeArea = (value: string) => {
        dispatch(setText(value));
        setValue(value)
        setCount(value.replace(/\s+/g, '').length)
    }
    const callChangeArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value} = event.target
        ChangeArea(value)
    }

    return (
        <>
            <div className="mt-[24px] mb-[8px]">О мне</div>
            <textarea className="w-full border-[#d6d6d6s] border border-solid rounded-[4px] min-h-[84px] p-[12px]"
                      value={value} onChange={callChangeArea} maxLength={200} placeholder="Информация о вас"></textarea>
            <div className="w-full text-right">
                {/*{errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}*/}
                <span>{`Символов без пробелов: ${count}`}</span>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 mt-[78px]">
                <BackButton className="col-span-2 text-white" onClick={backClick}>Назад</BackButton>
                <Button className="col-span-2 col-start-5 sm:col-start-5 md:col-start-5 lg:col-start-7 xl:col-start-11 text-white" onClick={openModal} type="submit">Отправить</Button>
            </div>
        </>

    );
}

export default ThreeFormComponent;