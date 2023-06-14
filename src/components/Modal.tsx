import React, {useCallback, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Button from "./Button";
import {saveStepOne, saveStepThree, saveStepTwo} from "../store/slices/formSlice";
import {useDispatch} from "react-redux";
import {string} from "yup";
import {saveEmail, savePhone} from "../store/slices/homeSlice";

export const OverlayDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.16)`

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 312px;
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  @media only screen and (max-device-width: 480px) {
    height: 300px;
    width: 300px;
  }`

export const CloseModal = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;`

export const ModalSvg = styled.svg`
  width: 100%;
  height: 100%;`
export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: 600;`


export default function Modal({setValue, modalError}: { setValue: (value: boolean) => void, modalError: boolean }) {
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState('')


    const dispatch = useDispatch();
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (modalError) {
                setValue(false);
            } else {
                navigate("/");
                event.preventDefault();
                dispatch(saveStepOne(""));
                dispatch(saveStepTwo(""));
                dispatch(saveStepThree(""));
                dispatch(saveEmail(""));
                dispatch(savePhone(""))
            }

        },
        [dispatch],
    );
    return (<>

            <OverlayDiv className="min-w-full min-h-full" onClick={handleChange}/>
            {modalError ? (
                <>
                    <ModalStyle className="z-10">
                        <div className="grid grid-cols-12 w-full px-[32px] mt-[32px]">
                            <ModalTitle className="col-span-1">Ошибка</ModalTitle>
                            <div className="col-start-12 col-span-1">
                                <CloseModal onClick={handleChange} >
                                    <ModalSvg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                        <rect width="28" height="28" rx="14" fill="black" fillOpacity="0.04"/>
                                        <path
                                            d="M9.40385 8.6965C9.59911 8.50123 9.91569 8.50123 10.111 8.6965L14.0002 12.5857L17.8892 8.69665C18.0845 8.50138 18.4011 8.50138 18.5963 8.69665L19.3034 9.40375C19.4987 9.59902 19.4987 9.9156 19.3034 10.1109L15.4144 13.9999L19.3033 17.8889C19.4986 18.0841 19.4986 18.4007 19.3033 18.596L18.5962 19.3031C18.401 19.4984 18.0844 19.4984 17.8891 19.3031L14.0002 15.4141L10.111 19.3032C9.91577 19.4985 9.59919 19.4985 9.40393 19.3032L8.69682 18.5961C8.50156 18.4009 8.50156 18.0843 8.69682 17.889L12.5859 13.9999L8.69674 10.1107C8.50148 9.91545 8.50148 9.59886 8.69674 9.4036L9.40385 8.6965Z"
                                            fill="#B3B3B3"/>
                                    </ModalSvg>
                                </CloseModal>
                            </div>

                        </div>

                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="80" rx="40" fill="#E84E58" fillOpacity="0.15"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M39.9998 20.7998C29.4014 20.7998 20.7998 29.4014 20.7998 39.9998C20.7998 50.5982 29.4014 59.1998 39.9998 59.1998C50.5982 59.1998 59.1998 50.5982 59.1998 39.9998C59.1998 29.4014 50.5982 20.7998 39.9998 20.7998ZM32.4095 31.4835C32.7319 31.161 33.2548 31.161 33.5772 31.4835L40 37.9062L46.4225 31.4838C46.745 31.1613 47.2678 31.1613 47.5903 31.4838L48.758 32.6515C49.0805 32.974 49.0805 33.4968 48.758 33.8192L42.3355 40.2417L48.7579 46.6641C49.0804 46.9865 49.0804 47.5094 48.7579 47.8318L47.5902 48.9996C47.2677 49.322 46.7449 49.322 46.4224 48.9996L40 42.5772L33.5773 48.9998C33.2549 49.3223 32.7321 49.3223 32.4096 48.9998L31.2419 47.8321C30.9194 47.5096 30.9194 46.9868 31.2419 46.6643L37.6645 40.2417L31.2417 33.819C30.9193 33.4965 30.9193 32.9737 31.2417 32.6512L32.4095 31.4835Z"
                                  fill="#E84E58"/>
                        </svg>
                        <div className="grid grid-cols-4 mb-[32px] w-full px-[32px] sm:grid-cols-3">
                            <Button className="col-start-3 sm:col-start-3 md:col-start-4 col-span-1  text-[14px] text-white h-[44px] w-[88px]" onClick={handleChange}>Закрыть</Button>
                        </div>
                    </ModalStyle>
                </>
            ) : (
                <>
                    <ModalStyle className="z-10">
                        <div className="grid grid-cols-12 mt-[32px]">
                            <ModalTitle className="col-span-8 col-start-3">Форма успешно отправлена</ModalTitle>
                        </div>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="80" rx="40" fill="#05AE71" fillOpacity="0.15"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M20.8 40C20.8 29.4016 29.4016 20.8 40 20.8C50.5985 20.8 59.2001 29.4016 59.2001 40C59.2001 50.5985 50.5985 59.2001 40 59.2001C29.4016 59.2001 20.8 50.5985 20.8 40ZM47.4093 32.9903C46.9678 32.6817 46.3556 32.7557 46.0058 33.16L37.8957 42.5311L33.715 38.7738C33.3165 38.4157 32.7008 38.4157 32.3023 38.7738L30.7329 40.1842C30.2891 40.5831 30.2891 41.264 30.7329 41.6629L36.5953 46.9314C36.7874 47.1041 37.0396 47.2001 37.3016 47.2001H38.9073C39.2144 47.2001 39.5058 47.0683 39.7033 46.8401L49.3568 35.6856C49.7452 35.2368 49.6585 34.5625 49.1684 34.2199L47.4093 32.9903Z"
                                  fill="#05AE71"/>
                        </svg>
                        <div className="grid grid-cols-3 mb-[32px]">
                            <Button className="col-start-2 col-span-1  items-center text-[14px] text-white" onClick={handleChange}>На главную</Button>
                        </div>
                    </ModalStyle>
                </>
            )}
        </>
    )
}