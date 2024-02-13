import React, { FC } from 'react'
import cls from './index.module.scss'
import Image from 'next/image';
import userIcon from '../../assets/userIcon.svg';
import rightArrow from '../../assets/rightArrow.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';
import catalogyIcon from '../../assets/catalogyIcon.svg';
import companyIcon from '../../assets/companyIcon.svg';
import telIcon from '../../assets/telIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import mailIcon from '../../assets/mailIcon.svg';
import shopIcon from '../../assets/shopIcon.svg';
import pointIcon from '../../assets/pointIcon.svg';
import helpIcon from '../../assets/helpIcon.svg';
import exitIcon from '../../assets/exitIcon.svg';

interface MobileMenu {
  registrationFormHandler: () => void;
}

const MobileMenu: FC<MobileMenu> = ({ registrationFormHandler }) => {
  return (
    <section id={cls.mobileMenu}>
      <ul>
        <li>
          <Image src={userIcon} width={16} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Профіль
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={favoriteIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Уподобані
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={catalogyIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Каталог
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={companyIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Про компанію
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={telIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Telegram
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={phoneIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Гаряча лінія
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={mailIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Email
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={shopIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Магазини
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={pointIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Пункти видачі
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={helpIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent}>
            Допомога
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
        <li>
          <Image src={exitIcon} width={21} height={20} alt='img' />
          <div className={cls.mobileMenuContent} onClick={registrationFormHandler}>
            Вийти
            <Image src={rightArrow} width={11} height={7} alt='img' />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MobileMenu