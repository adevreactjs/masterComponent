'use client';
import Image from 'next/image';
import cls from './index.module.scss';
import clipIcon from '@/assets/clip.svg';
import clipBlackIcon from '@/assets/clipBlack.svg';
import avatarIcon from '@/assets/avatar.svg';
import companyIcon from '@/assets/procIcon.svg';
import commentIcon from '@/assets/comment.svg';
import favIcon from '@/assets/favIcon.svg';
import productImg from '@/assets/mathCart.jpg';
import { FC, ChangeEvent, useState } from 'react';
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
    const formattedToday = new Date().toLocaleDateString('ru-RU').replace(/\./g, '.');
    const mess: Message = {
      id: Math.floor(Math.random() * 100),
      message: message,
      file: image,
      date: formattedToday,
      answer:
        'Добрий день. Гарантія діє 3 роки. Всю необхідну інформацію Ви можете знайти в розділі “Характеристики”.',
    };
    if (message != '') {
      setMessages(prev => [...prev, mess]);
      setImage('');
      setMessage('');
    }
  };

  return (
    <>
      <div className={cls.productQuestions}>
        <div>
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
          {messages.toReversed().map(el => (
            <div key={el.id}>
              <div className={cls.message}>
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
              <div className={cls.answerOnQuestion}>
                <div className={cls.avatarMaster}>
                  <div className={cls.logoMaster}>
                    <Image src={companyIcon} width={15} height={15} alt='avatarIcon' />
                  </div>
                  <p>MasterComponent</p>
                </div>
                <p className={cls.textMessage}>{el.answer}</p>
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
            </div>
          ))}
        </div>
        <div>
          <div className={cls.productItem}>
            <div className={cls.productImage}>
              <Image
                className={cls.productImg}
                src={productImg}
                width={542}
                height={312}
                alt='productImg'
              />
              <div className={cls.bonus}>+15 бонусів</div>
              <button className={cls.favBtn}>
                <Image src={favIcon} width={30} height={26} alt='favIcon' />
              </button>
            </div>
            <div className={cls.description}>
              <h2>Материнська плата Asus PRIME Z790-P</h2>
              <div className={cls.price}>9 485 ₴</div>
              <div className={cls.sale}>10 579 ₴</div>
            </div>
            <ul>
              <li>(WIFI) D4</li>
              <li>DDR4 для ПК</li>
              <li>LGA1700</li>
              <li>ATX</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cls.productQuestionsMobile}>
        <div className={cls.productQuestionsForm}>
          <div className={cls.headerForm}>
            <div className={cls.headerName}>
              <Image src={avatarIcon} width={30} height={30} alt='avatarIcon' />
              <p>Юрій</p>
            </div>
            <label htmlFor='file-upload' className={cls.questionsFieldBtn}>
              <input id='file-upload' type='file' accept='image/*' onChange={handleImageChange} />
              <Image src={clipBlackIcon} width={18} height={18} alt='clipIcon' />
            </label>
          </div>
          <div className={cls.inputFormField}>
            <input
              type='text'
              placeholder='Ваше запитання...'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={cls.questionsBtnMob}>
          <button className={cls.questionsBtnMobile} onClick={sendQuestion}>
            Поставити запитання
          </button>
        </div>
        <div>
          {messages.toReversed().map((el, ind) => (
            <div key={el.id}>
              <div className={cls.message}>
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
              <div className={cls.answerOnQuestion}>
                <div className={cls.avatarMaster}>
                  <div className={cls.logoMaster}>
                    <Image src={companyIcon} width={15} height={15} alt='avatarIcon' />
                  </div>
                  <p>MasterComponent</p>
                </div>
                <p className={cls.textMessage}>{el.answer}</p>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductQuestions;
