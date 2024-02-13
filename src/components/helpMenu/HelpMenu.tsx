import React from 'react'
import Image from 'next/image';
import cls from './index.module.scss'
import telIcon from '../../assets/telIcon.svg';
import mailIcon from '../../assets/mailIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import shopIcon from '../../assets/shopIcon.svg';
import pointIcon from '../../assets/pointIcon.svg';


const HelpMenu = () => {
  return (
    <div className={cls.helpMenu}>
      <ul className={cls.helpMenuItems}>
        <li className={cls.helpMenuItem}>
          <Image src={telIcon} width={16} height={16} alt='telega' />
          Telrgram
        </li>
        <li className={cls.helpMenuItem}>
          <Image src={mailIcon} width={16} height={16} alt='email' />
          Email
        </li>
        <li className={cls.helpMenuItem}>
          <Image src={phoneIcon} width={16} height={16} alt='phoneIcon' />
          Гаряча лінія
        </li>
        <li className={cls.helpMenuItem}>
          <Image src={shopIcon} width={16} height={16} alt='shopIcon' />
          Магазини
        </li>
        <li className={cls.helpMenuItem}>
          <Image src={pointIcon} width={16} height={16} alt='pointIcon' />
          Пункти видачі
        </li>
      </ul>
    </div>
  );
}

export default HelpMenu