import React, { FC, useState } from 'react';
import cls from './index.module.scss';
import Image from 'next/image';
import { Product } from '@/types/type';
import Heart from './Heart';


interface NewsCartProps {
  width?: number;
  discount?: number;
  fontSize?: number;
  product: Product;
  id: number;
}

const NewsCart: FC<NewsCartProps> = ({ width, discount, fontSize, product, id }) => {
  const styles = {
    width: `${width}px`,
  };
  const fontStyles = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div style={styles} className={cls.cart}>
      <div className={cls.cartImage}>
        {/* <Image
          className={cls.cartImg}
          src={product.image}
          width={646}
          width={646}
          // placeholder='blur'
          alt='img'
          loading='lazy'
        /> */}
        <img className={cls.cartImg} src={product.image} alt="img" width={646} height={312}/>
        <div className={cls.bonusLabel}>+{product.bonus} бонуси</div>
        <Heart id={id} right/>
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
        {/* <li>{product.property.proc}</li> */}
        <li>4.2(5.7)GHz</li>
        <li>128MB</li>
        <li>AM5</li>
      </ul>
    </div>
  );
};

export default NewsCart;
