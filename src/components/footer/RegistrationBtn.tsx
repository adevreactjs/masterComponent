'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function RegistrationBtn() {
  //styles
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
`;
  const inputStyle = `
    min-[280px]:h-[12vw]
    min-[550px]:h-[5vw]
    bg-transparent
    border-b
    border-[#FBFBFB]
    text-[3.4vw]
    w-[58vw]
    placeholder:text-[3vw]
    focus:text-[3.5vw]
    focus:text-[#B9F072]
    min-[1200px]:w-[70vw]
    `;
  //form functionality
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_l1t80ks',
        'template_jnbgz4q',
        form.current as HTMLFormElement,
        'LshIBIke_3b6JtcS9',
      )
      .then(
        result => {
          handleClickBtn();
        },
        error => {
          console.log(error.text);
        },
      );

    if (form.current) {
      form.current.reset();
    }
  };
  //states
  const [sended, setSend] = useState(false);
  function handleClickBtn() {
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 1000);
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type='email'
        placeholder='Email'
        className={inputStyle}
        id='email'
        name='user_email'
        required
      />
      <button className={buttonStyles} type='submit'></button>
      {sended ? <p className='text-green-500 min-[1200px]:text-[28px]'>Check Gmail</p> : ''}
    </form>
  );
}
