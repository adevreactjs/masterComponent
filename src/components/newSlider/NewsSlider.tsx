'use client';
import React, { FC, useRef, useState, useEffect } from 'react';
import NewsCart from '../newsCart/NewsCart';
import cls from './index.module.scss';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/leftArr.svg';
import Image from 'next/image';

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
  const [currentWidth, setCurrentWidth] = useState(width);
  const [currentFont, setCurrentFont] = useState(fontSize);

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

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth < 600 ? 328 : 450);
      setCurrentFont(window.innerWidth < 600 ? 18 : 22);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentWidth, currentFont]);

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
          <NewsCart width={currentWidth} discount={discount} fontSize={currentFont} />
          <NewsCart width={currentWidth} discount={discount} fontSize={currentFont} />
          <NewsCart width={currentWidth} discount={discount} fontSize={currentFont} />
          <NewsCart width={currentWidth} discount={discount} fontSize={currentFont} />
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
