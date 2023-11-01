import React from 'react';
import cls from './index.module.scss';
import Image from 'next/image';
import procIcon from '../../assets/procIcon.jpg';
import favIcon from '../../assets/favIcon.svg';

const NewsCart = () => {
  return (
    <div className={cls.cart}>
      <div className={cls.cartImage}>
        <Image className={cls.cartImg} src={procIcon} width={646} height={312} alt='img' />
        <div className={cls.bonusLabel}>+23 бонуси</div>
        <Image className={cls.favIcon} src={favIcon} width={30} height={30} alt='img' />
      </div>
      <div className={cls.cartCharacteristic}>
        <h1 className={cls.cartTitle}>Процесор AMD Ryzen 9 7950X3D</h1>
        <p className={cls.cartPrice}>25 819 ₴</p>
      </div>
      <ul className={cls.characteristic}>
        <li>16 ядер</li>
        <li>4.2(5.7)GHz</li>
        <li>128MB</li>
        <li>AM5</li>
      </ul>
    </div>
  );
};

export default NewsCart;
