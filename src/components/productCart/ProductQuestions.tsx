'use client'
import Image from 'next/image';
import cls from './index.module.scss';
import clipIcon from '@/assets/clip.svg';
import { FC, ChangeEvent, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Message } from '@/types/type';

const ProductQuestions: FC = () => {
  const [image, setImage] = useState<string | StaticImport>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendQuestion = () => {
    const mess = {
      message: message,
      file: image,
    };
    setMessages(prev => [...prev, mess]);
    console.log(messages);
  };

  return (
    <>
      <div className={cls.productQuestions}>
        <div className={cls.productQuestionsField}>
          <div className={cls.questionsField}>
            <input
              type='text'
              placeholder='Поставити запитання'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='file-upload' className={cls.questionsFieldBtn}>
              <input id='file-upload' type='file' accept='image/*' onChange={handleImageChange} />
              <Image src={clipIcon} width={18} height={18} alt='clipIcon' />
            </label>
          </div>
          <button className={cls.questionsSendBtn} onClick={sendQuestion}>
            Надіслати
          </button>
        </div>
      </div>
      <div>
        {messages.map((msg, i) => (
          <h1 key={i}>{msg}</h1>
        ))}
      </div>
    </>
    //   {image && <Image src={image} width={300} height={100} alt='image' />}
  );
};

export default ProductQuestions;
