import React, { FC } from 'react';
import cls from './index.module.scss';
import Image from 'next/image';
import procIcon from '../../assets/procIcon.jpg';
import favIcon from '../../assets/favIcon.svg';
import { Product } from '@/types/type';


interface NewsCartProps {
  width?: number;
  discount?: number;
  fontSize?: number;
  product: Product
}

const NewsCart: FC<NewsCartProps> = ({ width, discount, fontSize, product }) => {
  const styles = {
    width: `${width}px`,
  };
  const fontStyles = {
    fontSize: `${fontSize}px`,
  };
  return (
    <div style={styles} className={cls.cart}>
      <div className={cls.cartImage}>
        <Image
          className={cls.cartImg}
          src={product.image}
          width={646}
          height={312}
          placeholder='blur'
          alt='img'
          loading='lazy'
         
        />
        <div className={cls.bonusLabel}>+{product.bonus} бонуси</div>
        <Image className={cls.favIcon} src={favIcon} width={30} height={30} alt='img' />
      </div>
      <div className={cls.cartCharacteristic}>
        <h1 style={fontStyles} className={cls.cartTitle}>
          {product.title}
        </h1>
        <p style={fontStyles} className={cls.cartPrice}>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₴
        </p>
        {discount && <div className={cls.discount}>{discount} ₴</div>}
      </div>
      <ul className={cls.characteristic}>
        <li>{product.property[0].proc}</li>
        <li>4.2(5.7)GHz</li>
        <li>128MB</li>
        <li>AM5</li>
      </ul>
    </div>
  );
};

export default NewsCart;
