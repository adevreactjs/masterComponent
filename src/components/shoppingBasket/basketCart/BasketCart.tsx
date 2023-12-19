'use client';
import Image from 'next/image';
import cls from './index.module.scss';
import cartImg from '@/assets/mathRog.jpg';
import procIcon from '@/assets/procIcon.svg';
import { useState } from 'react';

const BasketCart = () => {
  const [count, setCount] = useState(1);

  const calculateInc = () => {
    setCount(prev => (prev += 1));
  };
  const calculateDec = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(prev => (prev -= 1));
    }
  };
  return (
    <div className={cls.basketCart}>
      <div className={cls.basketCartWrapper}>
        <div className={cls.basketCartInfo}>
          <div className={cls.basketCartImage}>
            <Image src={cartImg} width={60} height={60} alt='cartImg' />
          </div>
          <div>
            <div className={cls.basketCartDescription}>
              Материнська плата Gigabyte B550M AORUS ELITE (sAM4,...
            </div>
          </div>
        </div>
        <div className={cls.basketCartCounter}>
          <button onClick={calculateDec} className={cls.minusBtn}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='11'
              height='2'
              viewBox='0 0 11 2'
              fill='none'>
              <path d='M1 1H10' stroke='#4E4E4E' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </button>
          <div className={cls.basketCartCount}>{count}</div>
          <button onClick={calculateInc} className={cls.plusBtn}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='11'
              height='12'
              viewBox='0 0 11 12'
              fill='none'>
              <path
                d='M1 6H10M5.5 10.5L5.5 1.5'
                stroke='#4E4E4E'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
        <div className={cls.basketCartPrice}>
          {9485 * count} ₴<div className={cls.basketCartDiscount}>10 579 ₴</div>
        </div>
      </div>
      <div className={cls.basketTotalWrapper}>
        <div className={cls.basketTotalBonus}>
          +63
          <div className={cls.procImage}>
            <Image src={procIcon} width={12} height={12} alt='closeIcon' />
          </div>
        </div>
      </div>

      <div className={cls.basketCartCounterMobile}>
        <button onClick={calculateDec} className={cls.minusBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='2'
            viewBox='0 0 10 2'
            fill='none'>
            <path d='M1.5 1H8.5' stroke='#4E4E4E' strokeWidth='1.5' strokeLinecap='round' />
          </svg>
        </button>
        <div className={cls.basketCartCountMobile}>{count}</div>
        <button onClick={calculateInc} className={cls.plusBtn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'>
            <path
              d='M1.5 5H8.5M5 8.5L5 1.5'
              stroke='#4E4E4E'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BasketCart;
