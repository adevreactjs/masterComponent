'use client';
import React, { useState } from 'react';
import cls from './index.module.scss';
import mathBordImg from '../../assets/mathBordImg.jpg';
import mathImg from '../../assets/mathImg.jpg';
import favIcon from '../../assets/favIcon.svg';
import starIcon from '../../assets/starIcon.svg';
import infoIcon from '../../assets/infoIcon.svg';
import cardIcon from '../../assets/cardIcon.png';
import privateIcon from '../../assets/privateIcon.png';
import monoIcon from '../../assets/monoIcon.png';
import alphaIcon from '../../assets/alphaIcon.png';
import novaIcon from '../../assets/novaIcon.png';
import ukrIcon from '../../assets/ukrIcon.png';
import visaIcon from '../../assets/visaIcon.png';
import masterIcon from '../../assets/masterIcon.png';
import gPayIcon from '../../assets/gPayIncon.png';
import apPayIcon from '../../assets/apPayIcon.png';
import privPayIcon from '../../assets/24PayIcon.png';
import arrowIcon from '../../assets/btnArrow.svg';
import partIcon from '../../assets/partIcon.svg';
import shopIcon from '../../assets/shopIcon.svg';
import moneyIcon from '../../assets/moneyIcon.svg';
import fileIcon from '../../assets/fileIcon.svg';
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

            <div className={cls.buyNow}>
              <div className={cls.buyNowItems}>
                <div className={cls.priceLabels}>
                  <p>9 485</p>
                  <span>+15 бонусів</span>
                  <div className={cls.sells}>10 579</div>
                </div>
                <button className={cls.buyBtn}>
                  <Image src={cardIcon} width={20} height={20} alt='cardIcon' />
                  Купуй одним платежем
                </button>
              </div>
              <div className={cls.separateLine}></div>
              <div className={cls.creditInfo}>
                <div className={cls.creditTime}>
                  <p>
                    Розстрочка та кредит
                    <Image src={infoIcon} width={16} height={16} alt='infoIcon' />
                  </p>
                  <span>Від 1 200 грн/міс</span>
                </div>
                <div className={cls.bankItems}>
                  <div className={cls.bankItem}>
                    <div>
                      <Image src={privateIcon} width={20} height={20} alt='privateIcon' />
                    </div>
                    10 міс
                  </div>
                  <div className={cls.bankItem}>
                    <div>
                      <Image src={monoIcon} width={22} height={21} alt='monoIcon' />
                    </div>
                    6 міс
                  </div>
                  <div className={cls.bankItem}>
                    <div>
                      <Image src={alphaIcon} width={16} height={21} alt='alphaIcon' />
                    </div>
                    6 міс
                  </div>
                </div>
                <button className={cls.buyInCreditBtn}>
                  <Image src={cardIcon} width={20} height={20} alt='cardIcon' />
                  Купуй в кредит
                </button>
              </div>
            </div>
            <div className={cls.separateLine}></div>
            <div className={cls.delivery}>
              <p className={cls.deliveryTitle}>
                Доставка: Оберіть Ваше місто{' '}
                <div>
                  <Image src={arrowIcon} width={20} height={20} alt='arrowIcon' />
                </div>
              </p>
              <div className={cls.deliveryListWrapper}>
                <ul className={cls.deliveryList}>
                  <li>
                    <Image src={shopIcon} width={20} height={20} alt='shopIcon' />
                    Самовивіз з магазину
                  </li>
                  <li>
                    <Image src={novaIcon} width={20} height={20} alt='shopIcon' />
                    Доставка у відділення{' '}
                  </li>
                  <li>
                    <Image src={novaIcon} width={20} height={20} alt='shopIcon' />
                    Кур’єрська доставка{' '}
                  </li>
                  <li>
                    <Image src={ukrIcon} width={20} height={20} alt='shopIcon' />
                    Доставка у відділення{' '}
                  </li>
                </ul>
                <div className={cls.deliveryInfo}>
                  <p>Безкоштовно</p>
                  <div className={cls.deliveryInfoWrapper}>
                    <ul className={cls.deliveryInfoPrice}>
                      <li>За тарифом Нової Пошти</li>
                      <li>За тарифом Нової Пошти</li>
                      <li>За тарифом Укрпошти</li>
                    </ul>
                    <ul className={cls.deliveryInfoDay}>
                      <li>Відправимо завтра</li>
                      <li>Відправимо завтра</li>
                      <li>Відправимо завтра</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={cls.separateLine}></div>

            <div className={cls.payments}>
              <p>
                Оплата
                <Image src={infoIcon} width={12} height={12} alt='infoIcon' />
              </p>
              <ul>
                <li>
                  <Image src={visaIcon} width={43} height={14} alt='visaIcon' />
                </li>
                <li>
                  <Image src={masterIcon} width={30} height={17} alt='masterIcon' />
                </li>
                <li>
                  <Image src={monoIcon} width={21} height={20} alt='monoIcon' />
                </li>
                <li>
                  <Image src={gPayIcon} width={42} height={20} alt='gPayIcon' />
                </li>
                <li>
                  <Image src={apPayIcon} width={43} height={18} alt='apPayIcon' />
                </li>
                <li>
                  <Image src={privPayIcon} width={43} height={20} alt='apPayIcon' />
                </li>
                <li>
                  <Image src={partIcon} width={20} height={20} alt='apPayIcon' />
                </li>
                <li>
                  <Image src={moneyIcon} width={22} height={21} alt='apPayIcon' />
                  Готівкою
                </li>
                <li>
                  <Image src={fileIcon} width={22} height={21} alt='apPayIcon' />
                  Безготівковий рахунок
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;