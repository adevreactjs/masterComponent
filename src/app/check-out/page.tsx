'use client';
import React from 'react';
import cls from './index.module.scss';
import FormInput from './formInput/FormInput';
import InputMask from 'react-input-mask';

const Page = () => {
  return (
    <section className={cls.checkOut}>
      <div className={cls.container}>
        <div className={cls.checkOutWrapper}>
          <div className={cls.checkOutTitle}>
            <h2>Дані для замовлення</h2>
            <span>Крок 1/3</span>
          </div>
          <div className={cls.checkOutForm}>
            <FormInput placeholder={'Прізвище'} />
            <FormInput placeholder={'Ім’я'} />
            <FormInput placeholder={'По батькові'} />
            <div>
              <div className={cls.mask}>
                <InputMask
                  mask='+38(09 9) 9 9 9 9 9 9 9'
                  maskChar='_'
                  id='phone'
                  type='text'
                  placeholder='+38(0_ _) _ _ _ _ _ _ _'
                />
              </div>
              <p>Номер телефона людини, яка буде отримувати замовлення</p>
            </div>
            <div>
              <FormInput placeholder={'E-mail'} type='email' />
              <p>Для відстеження статусу замовлення</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
