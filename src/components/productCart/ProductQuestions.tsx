'use client';
import Image from 'next/image';
import cls from './index.module.scss';
import clipIcon from '@/assets/clip.svg';
import avatarIcon from '@/assets/avatar.svg';
import commentIcon from '@/assets/comment.svg';
import { FC, ChangeEvent, useState, ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Message } from '@/types/type';

const ProductQuestions: FC = () => {
  const [image, setImage] = useState<string | StaticImport>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

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
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const formattedToday = dd + '.' + mm + '.' + yyyy;
    const mess: Message = {
      message: message,
      file: image,
      date: formattedToday,
    };
    setMessages(prev => [...prev, mess]);
    setImage('');
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
        {messages.map((el, ind) => (
          <div key={ind} className={cls.message}>
            <div className={cls.avatar}>
              <Image src={avatarIcon} width={30} height={30} alt='avatarIcon' />
              <p>Степан</p>
            </div>
            <p className={cls.textMessage}>{el.message}</p>
            {el.file != '' && <Image src={el.file} width={300} height={100} alt='image' />}
            <div className={cls.infoMessage}>
              <div className={cls.date}>{el.date}</div>
              <div className={cls.comments}>
                <div className={cls.commentsCount}>
                  <Image src={commentIcon} width={15} height={15} alt='avatarIcon' />
                  Коментарі: 1
                </div>
                <div className={cls.commentsCount}>Відповісти </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductQuestions;
