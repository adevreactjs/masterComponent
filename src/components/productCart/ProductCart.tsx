'use client';
import React, { useState } from 'react';
import cls from './index.module.scss';
import mathBordImg from '../../assets/mathBordImg.jpg';
import mathImg from '../../assets/mathImg.jpg';
import Image from 'next/image';

const ProductCart = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeImageGallery, setActiveImageGallery] = useState(0);
  const categories = [
    'Загальні відомості',
    'Характеристики',
    'Аксесуари',
    'Відгуки: 234',
    'Питання',
    'Фото та відео',
  ];
  const galleryImages = [mathBordImg, mathImg, mathBordImg, mathImg, mathBordImg];
  const changeActiveBtn = (ind: number) => {
    setActiveCategory(ind);
  };
  const changeActiveBorder = (ind: number) => {
    setActiveImageGallery(ind);
  };
  const chooseImage = galleryImages[activeImageGallery];
  return (
    <div className={cls.productCart}>
      <div className={cls.container}>
        <div className={cls.categoryItems}>
          <ul>
            {categories.map((name, ind) => (
              <li
                key={ind}
                id={`${activeCategory === ind && cls.activeCategoryBtn}`}
                onClick={() => changeActiveBtn(ind)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <section className={cls.cartGallery}>
          <div className={cls.smallImageGallery}>
            {galleryImages.map((img, ind) => (
              <div key={ind} 
                id={`${activeImageGallery === ind && cls.activeBorder}`}
                className={cls.smallImage}
                onClick={() => changeActiveBorder(ind)}>
                <Image src={img} width={90} height={71} alt='img' />
              </div>
            ))}
          </div>
          <div className={cls.mainImage}>
            <Image src={chooseImage} fill={true} alt='img' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCart;
