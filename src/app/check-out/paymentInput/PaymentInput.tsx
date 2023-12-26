import React from 'react';
import cls from './index.module.scss';
import monoIcon from '@/assets/monoIcon.png';
import privateIcon from '@/assets/privateIcon.png';
import alphaIcon from '@/assets/alphaIcon.png';
import Image from 'next/image';

const PaymentInput = () => {
  const payments = [
    { title: 'При отриманні', img: '' },
    { title: 'Онлайн оплата карткою', img: '' },
    { title: 'Оплата частинами з monobank', img: monoIcon },
    { title: 'Оплата частинами з PrivarBank', img: privateIcon },
    { title: 'Оплата частинами з Alfa-Bank', img: alphaIcon },
    { title: 'Безготівковий розрахунок з ПДВ', img: '' },
    { title: 'Безготівковий розрахунок без ПДВ', img: '' },
  ];

  return (
    <div className={cls.payment}>
      {payments.map((payment, ind) => {
        return (
          <div className={cls.paymentMethod} key={ind}>
            <input
              className={cls.customCheckbox}
              type='radio'
              id={String(ind)}
              name='pay'
              value='payment'
            />
            <label className={cls.title} htmlFor={String(ind)}>
              {payment.img && <Image className={cls.payImg} src={payment.img} width={21} height={20} alt='monoIcon' />}
              {payment.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentInput;
