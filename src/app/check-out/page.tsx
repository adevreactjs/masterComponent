'use client';
import React from 'react';
import cls from './index.module.scss';
import FormInput from './formInput/FormInput';
import InputMask from 'react-input-mask';
import DeliveryInput from './deliveryInput/DeliveryInput';
import PaymentInput from './paymentInput/PaymentInput';
import BasketCart from '@/components/shoppingBasket/basketCart/BasketCart';
import procIcon from '@/assets/procIcon.svg'
import Image from 'next/image';

const Page = () => {
  return (
    <div className={cls.checkOut}>
      <div className={cls.checkOutContainer}>
        <section className={cls.checkOutContacts}>
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
                <p>Номер людини, яка буде отримувати замовлення</p>
              </div>
              <div>
                <FormInput placeholder={'E-mail'} type='email' />
                <p>Для відстеження статусу замовлення</p>
              </div>
            </div>
          </div>
        </section>
        <section className={cls.checkOutDelivery}>
          <div className={cls.checkOutTitle}>
            <h2>Доставка</h2>
            <span>Крок 2/3</span>
          </div>
          <FormInput placeholder={'Місто'} />
          <DeliveryInput />
        </section>
        <section className={cls.checkOutDelivery}>
          <div className={cls.checkOutTitle}>
            <h2>Оплата</h2>
            <span>Крок 3/3</span>
          </div>
          <PaymentInput />
        </section>
        <section className={cls.comments}>
          <textarea placeholder='Коментар до замовлення'></textarea>
          <p>
            Підтверджуючи замовлення, я приймаю <span>умови користувальницької угоди</span> та{' '}
            <span>публічної оферти</span>
          </p>
        </section>
        <section className={cls.submit}>
          <button className={cls.submitBtn}>Підтвердити замовлення</button>
        </section>
      </div>
      <section className={cls.cart}>
        <div className={cls.cartTitle}>
          <h2>Кошик</h2>
          <span>5 товарів</span>
        </div>
        <div className={cls.basketCarts}>
          {<BasketCart />}
          {<BasketCart />}
          {<BasketCart />}
          {<BasketCart />}
          {<BasketCart />}
        </div>
        <ul className={cls.basketCartsSum}>
          <li>
            Вартість товарів:<span>9 485 ₴</span>
          </li>
          <li>
            Вартість доставки:<span>9 485 ₴</span>
          </li>
          <li>
            Нараховано бонусів:
            <span className={cls.bonusTotal}>
              <span>+65</span>
              <div className={cls.proc}>
                <Image src={procIcon} width={12} height={12} alt='procIcon' />
              </div>
            </span>
          </li>
          <li>
            Разом до сплати:<span>9 876 ₴</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
