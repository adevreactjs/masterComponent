import React from 'react';
import cls from './index.module.scss';
import Image from 'next/image';
import nvidiaIcon from '../../assets/nvidiaIcon.png';
import amdIcon from '../../assets/amdIcon.png';
import intelIcon from '../../assets/intelIcon.png';
import rightArrow from '../../assets/rightArrow.svg';

const PopularRequests = () => {
  return (
    <div className={cls.popularRequests}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <h1 className={cls.title}>Популярні запити</h1>
          <ul className={cls.categoryList}>
            <li>
              <div className={cls.productLogo}>
                <Image src={nvidiaIcon} width={38} height={30} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Відеокарта</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
            <li>
              <div className={cls.productLogo}>
                <Image src={amdIcon} width={27} height={30} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Відеокарта</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
            <li>
              <div className={cls.productLogo}>
                <Image src={intelIcon} width={42} height={28} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Процесор</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
            <li>
              <div className={cls.productLogo}>
                <Image src={amdIcon} width={27} height={30} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Процесор</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
            <li>
              <div className={cls.productLogo}>
                <Image src={intelIcon} width={42} height={30} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Материнська плата</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
            <li>
              <div className={cls.productLogo}>
                <Image src={amdIcon} width={27} height={30} alt='nvidiaIcon' />
              </div>
              <div className={cls.categoryTitle}>
                <p>Материнська плата</p>
                <Image src={rightArrow} width={16} height={9} alt='nvidiaIcon' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularRequests;
