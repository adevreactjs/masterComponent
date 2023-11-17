'use client';
import cls from './index.module.scss';
import procesIcon from '../../assets/procesIcon.jpg';
import favIcon from '../../assets/favIcon.svg';
import clickFavIcon from '../../assets/clickFavIcon.svg';
import Image from 'next/image';
import { useState } from 'react';

const RecentlyShowCart = () => {
  const [addToFavorite, setAddToFavorite] = useState(false);
  return (
    <div className={cls.cart}>
      <div className={cls.cartImage}>
        <Image className={cls.cartImg} src={procesIcon} width={257} height={174} alt='procesIcon' />
        <p className={cls.bonusLabel}>+15 бонусів</p>
        <button className={cls.favBtn} onClick={() => setAddToFavorite(!addToFavorite)}>
          {addToFavorite ? (
            <Image src={clickFavIcon} width={24} height={24} alt='favIcon' />
          ) : (
            <Image src={favIcon} width={24} height={24} alt='favIcon' />
          )}
        </button>
      </div>
      <div className={cls.cartDescription}>
        <h1>Процесор AMD Ryzen 5 5500</h1>
        <div className={cls.cartPrice}>
          <div className={cls.price}>3 899 ₴</div>
          <div className={cls.sells}>4 099 ₴</div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyShowCart;
