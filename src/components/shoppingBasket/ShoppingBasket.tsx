import React from 'react';
import cls from './index.module.scss';
import closeIcon from '@/assets/closeIcon.svg';
import procIcon from '@/assets/procIcon.svg';
import Image from 'next/image';

const ShoppingBasket = () => {
  return (
    <section className={cls.basket}>
      <div className={cls.basketWrapper}>
        <div className={cls.basketHeader}>
          <div className={cls.basketTitle}>
            <h1>Кошик</h1>
            <div className={cls.basketCount}>5 товарів</div>
          </div>
          <button>
            <Image src={closeIcon} width={20} height={20} alt='closeIcon' />
          </button>
        </div>
        <div className={cls.basketTotal}>
          <div className={cls.basketTotalValues}>
            <div className={cls.basketTotalBonus}>
              <div className={cls.basketTotalTitle}>Нараховано бонусів:</div>
              <div className={cls.basketTotalValue}>
                +63
                <div className={cls.procImage}>
                  <Image src={procIcon} width={12} height={12} alt='closeIcon' />
                </div>
              </div>
            </div>
            <div className={cls.basketSum}>
              <div className={cls.basketSumTitle}>Разом:</div>
              <div className={cls.basketSumValue}>9 876 ₴</div>
            </div>
          </div>
          <button className={cls.oderBtn}>Оформити замовлення</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBasket;