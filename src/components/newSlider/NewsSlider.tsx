'use client';
import React, { FC, useRef, useState, useEffect } from 'react';
import NewsCart from '../newsCart/NewsCart';
import cls from './index.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/leftArr.svg';
import Image from 'next/image';
import procImg from '../../assets/procIcon.jpg';
import { Product } from '@/types/type';

interface NewsSliderProps {
  title?: string;
  width?: number;
  discount?: number;
  fontSize?: number;
  showMoreBtn?: boolean;
  showDots?: boolean;
}

const NewsSlider: FC<NewsSliderProps> = ({
  title,
  width,
  discount,
  fontSize,
  showMoreBtn,
  showDots,
}) => {
  const [activeBreakLine, setActiveBreakLine] = useState(true);

  const scrollRef = useRef<HTMLInputElement | null | any>(null);

  const scroll = (scrollOffset: number) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const breakLineHandlerFirst = () => {
    scroll(-1390);
    setActiveBreakLine(true);
  };
  const breakLineHandlerSecond = () => {
    scroll(+1390);
    setActiveBreakLine(false);
  };

  const products: Product[] = [
    {
      id: 1,
      image: procImg,
      title: 'Процесор AMD Ryzen 9 1',
      price: 25819,
      bonus: 21,
      property: [
        {
          proc: '16 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
    {
      id: 2,

      image: procImg,
      title: 'Процесор AMD Ryzen 9 2',
      price: 25000,
      bonus: 20,
      property: [
        {
          proc: '15 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
    {
      id: 3,

      image: procImg,
      title: 'Процесор AMD Ryzen 9 3',
      price: 25819,
      bonus: 19,
      property: [
        {
          proc: '14 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
    {
      id: 4,

      image: procImg,
      title: 'Процесор AMD Ryzen 9 4',
      price: 25819,
      bonus: 21,
      property: [
        {
          proc: '16 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
    {
      id: 5,
      image: procImg,
      title: 'Процесор AMD Ryzen 9 5',
      price: 25819,
      bonus: 21,
      property: [
        {
          proc: '16 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
    {
      id: 6,

      image: procImg,
      title: 'Процесор AMD Ryzen 9 6',
      price: 25819,
      bonus: 21,
      property: [
        {
          proc: '16 ядер',
          frequency: '4.2(5.7)GHz',
          memory: '128MB',
          type: 'AM5',
        },
      ],
    },
  ];

  return (
    <div className={cls.newsSlider}>
      <h1 className={cls.title}>{title}</h1>
      <div className={cls.container}>
        <button className={cls.leftArrow} onClick={() => scroll(-1390)}>
          <Image src={leftArrow} width={22} height={22} alt='leftArrow' />
        </button>
        <button onClick={() => scroll(+1390)} className={cls.rightArrow}>
          <Image src={rightArrow} width={22} height={22} alt='rightArrow' />
        </button>
        <div className={cls.carts} ref={scrollRef}>
          {products.map((product: Product) => (
            <NewsCart
              key={product.id}
              product={product}
              width={width}
              discount={discount}
              fontSize={fontSize}
            />
          ))}
        </div>
        {showDots && (
          <div className={cls.breakLines}>
            <div
              onClick={breakLineHandlerFirst}
              className={`${activeBreakLine ? cls.activeBreakLine : cls.breakLine}`}></div>
            <div
              onClick={breakLineHandlerSecond}
              className={`${activeBreakLine ? cls.breakLine : cls.activeBreakLine}`}></div>
          </div>
        )}

        <div className={cls.showMoreBtn}>
          {showMoreBtn && <button>Показати усі продукти</button>}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
