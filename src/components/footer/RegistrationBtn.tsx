'use client'
import { useDispatch } from 'react-redux';
import { openRegistrationFormHandler } from '@/app/store/reducers/RegistrationSlice';

export default function RegistrationBtn() {
    const buttonStyles = `
    pl-[10px]
    pr-[10px]
    rounded-[3vw] 
    bg-[#B9F072] 
    font-[500] 
    text-[#262626] 
    text-[4vw] 
    h-[8vw] 
    min-[550px]:text-[3vw] 
    min-[500px]:text-[3vw] 
    min-[965px]:h-[6.5vw] 
    min-[1200px]:h-[5vw]
    min-[1200px]:text-[2vw]
    min-[280px]:before:content-['Надіслати']
    min-[400px]:before:content-['Зареєструватися']
`
    const dispatch = useDispatch()
    return (
        <button className={buttonStyles} onClick={() => dispatch(openRegistrationFormHandler(true))}></button>
    )
};
