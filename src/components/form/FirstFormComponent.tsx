import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {saveNickname, saveName, saveSurname, saveSex} from '../../store/slices/firstFormSlice'
import {RootState} from "../../store/types"
import Selector from "../Selector"
import Input from "../Input"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import BackButton from "../BackButton"
import {useNavigate} from "react-router-dom"
import Button from "../Button"

const firstFromSchema = yup.object().shape({
    nickname: yup
        .string()
        .max(30, "Максимальное количество символов 30")
        .matches(/^[a-zA-Za-zA-Zа-яА-ЯёЁ0-9_]*$/, "Могут быть только буквы и цифры")
        .min(3, 'Слишком короткая строка! Должна содержать не менее 3 символов'),
    name: yup.string().max(50, "Максимальное количество символов 50").matches(/^[a-zA-Zа-яА-ЯёЁ]*$/, "Только буквы")
        .min(3, 'Слишком короткая строка! Должна содержать не менее 3 символов'),
    surname: yup.string().max(50, "Максимальное количество символов 50").matches(/^[a-zA-Zа-яА-ЯёЁ]*$/, "Только буквы")
        .min(3, 'Слишком короткая строка! Должна содержать не менее 3 символов'),
    sex: yup.string(),
});

function FirstFormComponent({setActiveStep, activeStep}: {
    setActiveStep: (value: number) => void,
    activeStep: number
}) {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const nickName = useSelector((state: RootState) => state.firstForm.nickname)
    const name = useSelector((state: RootState) => state.firstForm.name)
    const surname = useSelector((state: RootState) => state.firstForm.surname)
    const sex = useSelector((state: RootState) => state.firstForm.sex)

    const handleChangeNickname = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveNickname(event.target.value))
        },
        [dispatch],
    );
    const handleChangeName = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveName(event.target.value))
        },
        [dispatch],
    );
    const handleChangeSurname = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveSurname(event.target.value))
        },
        [dispatch],
    );
    const handleChangeSex = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveSex(event.target.value))
        },
        [dispatch],
    );

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(firstFromSchema),
    });
    const onSubmit = (data: any) => {
        goNext()
    };
    const backClick = () => {
        if (activeStep === 1) {
            navigate("/")
        } else {
            setActiveStep(activeStep - 1)
        }
    }
    const goNext = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[100px]">
                <div className="mt-[100px] mb-[8px]">Логин</div>
                <Input {...register("nickname")} type="text" placeholder="Ivan_ivanov"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]" value={nickName}
                       onChange={handleChangeNickname} maxLength={40}/>
                {errors.nickname && <p className="mt-[8px]">{errors.nickname.message?.toString()}</p>}
                <div className="mt-[48px] mb-[8px]">Имя пользователя</div>
                <Input {...register("name")} type="text" placeholder="Иван"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]" value={name}
                       onChange={handleChangeName} maxLength={50}/>
                {errors.name && <p className="mt-[8px]">{errors.name.message?.toString()}</p>}
                <div className="mt-[48px] mb-[8px]">Фамилия пользователя</div>
                <Input {...register("surname")} type="text" placeholder="Иванов"
                       className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]" value={surname}
                       onChange={handleChangeSurname} maxLength={50}/>
                {errors.surname && <p className="mt-[8px]">{errors.surname.message?.toString()}</p>}
                <div className="mt-[48px] ">Пол</div>
                <Selector value={sex} onChange={handleChangeSex}>
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </Selector>
                <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12  mt-[88px]">
                    <BackButton className="col-span-2  text-white " onClick={backClick}>Назад</BackButton>
                    <Button type="submit" className="col-span-2 col-start-5 sm:col-start-5 md:col-start-5 lg:col-start-7 xl:col-start-11  text-white">Вперед</Button>
                </div>
            </form>
        </>
    )
}

export default FirstFormComponent;