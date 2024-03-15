'use client';
import React, { FC, useRef, useState, useEffect } from 'react';
import NewsCart from '../newsCart/NewsCart';
import cls from './index.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/leftArr.svg';
import Image from 'next/image';
import procImg from '../../assets/procIcon.jpg';
import { Product } from '@/types/type';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';

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

  const products: any = 
    [
      {
        id: 3,
        title: "Материнська плата Asus PRIME Z790-P",
        slug: "asus-prime-z790-p",
        code: 1040267,
        available: true,
        promotion: true,
        image: "http://res.cloudinary.com/dewql5auf/image/upload/v1709561028/online_store/mwkil01ftjhgpfvgepa9",
        price: "3499.00",
        sale: "200.00",
        bonus: "13.00",
        property: {
          proc: "Intel",
          type: "am",
          memory: "16",
          frequency: "10000"
        }
      },
      {
        id: 4,
        title: "Материнська плата Asus PRIME Z790-A",
        slug: "asus-prime-z790-a",
        code: 1040268,
        available: true,
        promotion: true,
        image: "http://res.cloudinary.com/dewql5auf/image/upload/v1709561167/online_store/ba9gvz4skksszkrhbiab",
        price: "3499.00",
        sale: "300.00",
        bonus: "15.00",
        property: {
          proc: "Intel",
          type: "am",
          memory: "16",
          frequency: "10000"
        }
      },
      {
        id: 5,
        title: "Материнська плата Asus PRIME Z790-B",
        slug: "asus-prime-z790-b",
        code: 1040269,
        available: true,
        promotion: true,
        image: "http://res.cloudinary.com/dewql5auf/image/upload/v1709561219/online_store/mjipswiiwfhjyekswmfe",
        price: "3599.00",
        sale: "400.00",
        bonus: "20.00",
        property: {
          proc: "Intel",
          type: "am",
          memory: "16",
          frequency: "10000"
        }
      },
      {
        id: 6,
        title: "Материнська плата Asus PRIME Z790-C",
        slug: "asus-prime-z790-c",
        code: 1040270,
        available: true,
        promotion: false,
        image: "http://res.cloudinary.com/dewql5auf/image/upload/v1709561269/online_store/zn6jxcz3n0wcelasybgf",
        price: "3699.00",
        sale: "400.00",
        bonus: "18.00",
        property: {
          proc: "Intel",
          type: "am",
          memory: "16",
          frequency: "10000"
        }
      },
      {
        id: 7,
        title: "Материнська плата Asus PRIME Z790-D",
        slug: "asus-prime-z790-d",
        code: 1040271,
        available: true,
        promotion: false,
        image: "http://res.cloudinary.com/dewql5auf/image/upload/v1709561312/online_store/bl5iami5j5iiu1bfa6e9",
        price: "3799.00",
        sale: "350.00",
        bonus: "25.00",
        property: {
          proc: "Intel",
          type: "am",
          memory: "16",
          frequency: "10000"
        }
      }
    ]
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
          {products.map((product: any) => (
            <NewsCart
              key={product.id}
              id={product.id}
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
