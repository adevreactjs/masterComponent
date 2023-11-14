'use client';
import React, { useState } from 'react';
import cls from './index.module.scss';
import mathBordImg from '../../assets/mathBordImg.jpg';
import mathImg from '../../assets/mathImg.jpg';
import favIcon from '../../assets/favIcon.svg';
import starIcon from '../../assets/starIcon.svg';
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
        <div className={cls.product}>
          <div className={cls.info}>
            <section className={cls.cartGallery}>
              <div className={cls.smallImageGallery}>
                {galleryImages.map((img, ind) => (
                  <div
                    id={`${activeImageGallery === ind && cls.activeBorder}`}
                    className={cls.smallImage}
                    onClick={() => changeActiveBorder(ind)}>
                    <Image key={ind} src={img} width={90} height={71} alt='img' />
                  </div>
                ))}
              </div>
              <div className={cls.mainImage}>
                <Image src={chooseImage} fill={true} alt='img' />
              </div>
              <Image className={cls.favIcon} src={favIcon} width={30} height={26} alt='img' />
            </section>
            <section className={cls.cartDescription}>
              <p>
                <span>Asus PRIME Z790-P WIFI D4</span> – материнська плата форм-фактора ATX.
                Оснащена сокетом 1700, підтримує швидкісну пам'ять та має широкий набір інтерфейсів.
                Дозволяє встановлювати 128 ГБ оперативної пам'яті, використовуючи 4 слоти для
                планок. Призначена для процесорів Intel 13-го покоління. Завдяки системі живлення,
                комплексним рішенням для охолодження та інтелектуальним параметрам налаштування
                PRIME Z790-P WIFI D4 надає користувачам і розробникам ПК низку оптимізацій
                продуктивності за допомогою інтуїтивно зрозумілих функцій програмного забезпечення
                та прошивки. Материнська плата PRIME Z790-P WIFI D4 містить гнучкі інструменти для
                налаштування кожного аспекту вашої системи, дозволяючи налаштовувати продуктивність
                так, щоб вона ідеально відповідала вашому способу роботи. ASUS Intelligent Control
                робить ваш...
              </p>
              <div className={cls.readMore}>
                <button>більше</button>
              </div>
            </section>
          </div>
          <section className={cls.price}>
            <div className={cls.title}>
              <h1>Материнська плата Asus PRIME Z790-P </h1>
              <p className={cls.inStock}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='7'
                  height='7'
                  viewBox='0 0 7 7'
                  fill='none'>
                  <circle cx='3.5' cy='3.5' r='3.5' fill='#B9FF61' />
                </svg>
                Є в наявності
              </p>
            </div>
            <div className={cls.rating}>
              <div className={cls.stars}>
                <Image src={starIcon} width={24} height={24} alt='starIcon' />
                <Image src={starIcon} width={24} height={24} alt='starIcon' />
                <Image src={starIcon} width={24} height={24} alt='starIcon' />
                <Image src={starIcon} width={24} height={24} alt='starIcon' />
                <Image src={starIcon} width={24} height={24} alt='starIcon' />
              </div>
              <span>5/5</span>
            </div>
            <ul className={cls.characteristic}>
                <li>(WIFI) D4</li>
                <li>DDR4 для ПК</li>
                <li>LGA1700</li>
                <li>ATX</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
