import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import Button from '../components/button'
import Input from "../components/input";
import FolderText from "../components/folderText";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignInSchema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegExp, 'Номер телефона введен неверно!'),
    email: yup.string().email('Электронная почта введена не верно!').required('Электронная почта введена неверно!'),
});
function Home() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(SignInSchema)
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        navigate('/create');
    };


    return (
        <div
            className="absolute left-1/2 transform -translate-x-1/2 max-w-[900px] min-w-[340px] sm:w-[400px] lg:w-[600px] lg:h-[600px] xl:w-[900px] xl:h-[704px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="m-[50px]">
                <div className="flex">
                    <img src="/avatar.png" className="h-[80px] w-[80px] rounded-full grid-cols-1" alt="avatar"/>
                    <div className="ml-[24px] mt-[12px]">
                        <div className="text-[20px] font-[600]" >Денис Алалыкин</div>
                        <div className="flex flex-col lg:flex-row sm:flex-col">
                            <div className="flex flex-row">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className=" justify-center justify-items-center content-center" href="https://t.me/DenAlal">Telegram</FolderText>
                            </div>
                            <div className="flex flex-row lg:ml-[17.6px]">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className="justify-items-center" href="https://github.com/DenisAlal?tab=repositories">GitHub</FolderText>
                            </div>
                            <div className="flex flex-row lg:ml-[17.6px]">
                                <img src="/folder.svg" alt="folder" className="w-[12px] h-[12px] mt-[1px]"/>
                                <FolderText className="justify-items-center" href="https://github.com/DenisAlal?tab=repositories">Resume</FolderText>
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    className="my-12 h-[1px] border-t-0 bg-[#00000014] "/>
                <div className="mt-[24px] mb-[8px]">Номер телефона</div>
                <div>
                    <Input {...register("phoneNumber")} type="text" placeholder="+7 999 999-99-99"
                           className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"/>
                    {errors.phoneNumber && <p className="mt-[8px]">{errors.phoneNumber.message?.toString()}</p>}
                </div>
                <div className="mt-[24px] mb-[8px]">Email</div>
                <div style={{marginBottom: 10}}>
                    <Input {...register("email")} type="text" placeholder="tim.jennings@example.com"
                           className="w-[300px] h-[44px] sm:w-[300px]  lg:w-[400px]"/>
                    {errors.email && <p className="mt-[8px]">{errors.email.message?.toString()}</p>}
                </div>
                <Button type="submit" className="text-white w-[80px] h-[45px] mt-[48px]" >
                    Начать</Button>
            </form>
        </div>

    );
}

export default Home;