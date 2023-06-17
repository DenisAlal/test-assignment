import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import Button from '../components/Button'
import Input from "../components/Input"
import FolderText from "../components/FolderText"
import {useNavigate} from "react-router-dom"
import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../store/types"

import {savePhone, saveEmail} from "../store/slices/homeSlice"
import InputMask from "react-input-mask"


const homeSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Некорректный формат номера')
        .required('Введите номер телефона'),
    email: yup
        .string()
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Введите корректный e-mail"
        )
        .required("Введите e-mail"),
});


function Home() {
    const dispatch = useDispatch();
    const phoneNumber = useSelector((state: RootState) => state.home.phoneNumber)
    const email = useSelector((state: RootState) => state.home.email)

    const handleChangePhone = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(savePhone(event.target.value))
        },
        [dispatch],
    );
    const handleChangeMail = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(saveEmail(event.target.value))
        },
        [dispatch],
    );
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(homeSchema)
    });
    const onSubmit = (data: any) => {
        navigate('/create');
    };
    useEffect(() => {
        document.title = "My test assigment"
    }, []);

    return (
        <div
            className="absolute left-1/2 transform -translate-x-1/2 max-w-[900px] min-w-[405px] sm:w-[400px] lg:w-[600px] xl:w-[900px] bg-white font-SBregular">
            <form onSubmit={handleSubmit(onSubmit)} className="m-[50px]">
                <div className="flex">
                    <img src="/avatar.png" className="h-[80px] w-[80px] rounded-full grid-cols-1" alt="avatar"/>
                    <div className="ml-[24px] mt-[12px]">
                        <div className="text-[20px] font-[600]">Денис Алалыкин</div>
                        <div className="flex flex-col lg:flex-row sm:flex-col">
                            <div className="flex flex-row">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className=" justify-center justify-items-center content-center "
                                            href="https://t.me/DenAlal">Telegram</FolderText>
                            </div>
                            <div className="flex flex-row lg:ml-[17.6px]">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className="justify-items-center"
                                            href="https://github.com/DenisAlal?tab=repositories">GitHub</FolderText>
                            </div>
                            <div className="flex flex-row lg:ml-[17.6px]">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className="justify-items-center"
                                            href="https://github.com/DenisAlal?tab=repositories">Resume</FolderText>
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    className="my-12 h-[1px] border-t-0 bg-[#00000014] "/>
                <div className="mt-[24px] mb-[8px]">Номер телефона</div>
                <div>

                    <InputMask
                        {...register("phoneNumber")}
                        mask="+7 (999) 999-99-99"
                        value={phoneNumber}
                        onChange={handleChangePhone}
                        placeholder="+7 (999) 999-99-99"
                        className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"
                        type="text"
                        style={{
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "12px",
                            gap: "12px",
                            background: "#f5f5f5",
                            border: "1px solid #d6d6d6",
                            borderRadius: "4px",
                        }}
                    />
                    {errors.phoneNumber && <p className="mt-[8px]">{errors.phoneNumber.message?.toString()}</p>}
                </div>
                <div className="mt-[24px] mb-[8px]">Email</div>
                <div className="mb-[10]">
                    <Input {...register("email")} type="text" placeholder="ivan_ivanov2000@gmail.com"
                           className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]" value={email}
                           onChange={handleChangeMail}/>
                    {errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}
                </div>
                <Button type="submit" className="text-white w-[80px] h-[45px] mt-[48px]">
                    Начать</Button>
            </form>
        </div>

    );
}

export default Home