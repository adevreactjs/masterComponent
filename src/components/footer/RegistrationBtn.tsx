'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function RegistrationBtn() {
  //styles
  const buttonStyles = `
    bg-[#B9F072] 
    font-[500] 
    text-[#262626]

    min-[280px]:h-[6.6vw]
    min-[280px]:rounded-[1.8vw]
    min-[280px]:pl-[8px]
    min-[280px]:pr-[8px]
    min-[280px]:text-[3vw]

    min-[500px]:h-[6vw]
    min-[500px]:rounded-[1.5vw]
    min-[500px]:pl-[15px]
    min-[500px]:pr-[15px]
    min-[500px]:text-[2.7vw]

    min-[550px]:h-[5vw]
    min-[550px]:rounded-[1.3vw]
    min-[550px]:text-[2.5vw]

    min-[740px]:rounded-[1.2vw]
    min-[740px]:text-[2.7vw]
    min-[740px]:pl-[22px]
    min-[740px]:pr-[22px]

    min-[1000px]:h-[4.5vw]
    min-[1000px]:rounded-[1.3vw]
    min-[1000px]:text-[2vw]
    min-[1000px]:pl-[26px]
    min-[1000px]:pr-[26px]

    min-[1400px]:h-[4.2vw]
    min-[1400px]:rounded-[1.2vw]
    min-[1400px]:text-[1.5vw]

    min-[280px]:before:content-['Надіслати']
    min-[400px]:before:content-['Зареєструватися']
`;
  const inputStyle = `
    bg-transparent
    border-b
    border-[#FBFBFB]
    focus:text-[#B9F072]

    
    min-[280px]:h-[6vw]
    min-[280px]:placeholder:text-[3vw]
    min-[280px]:w-[67vw]
    min-[280px]:text-[3.4vw]
    min-[280px]:focus:text-[3.5vw]
    min-[320px]:h-[4vw]
    min-[500px]:w-[58vw]
    min-[1000px]:w-[60vw]
    min-[1200px]:w-[66vw]
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
    <form ref={form} onSubmit={sendEmail} className='flex w-full flex-row justify-between items-end gap-[3vw] '>
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
