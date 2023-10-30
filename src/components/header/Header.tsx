'use client';
import cls from './index.module.scss';
import Image from 'next/image';
import searchIcon from '../../assets/searchIcon.svg';
import btnArrow from '../../assets/btnArrow.svg';
import userIcon from '../../assets/userIcon.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';
import cartIcon from '../../assets/cartIcon.svg';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <div className={cls.logo}>MasterComponent</div>
          <nav className={cls.navBar}>
            <div className={cls.searchBar}>
              <Image src={searchIcon} width={18} height={18} alt='search' />
              <input type='text' placeholder='Пошук...' />
            </div>
            <div className={cls.navBlock}>
              <ul className={cls.navCategories}>
                <li>
                  Каталог
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li>
                  Допомога
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li>Про компанію</li>
              </ul>
            </div>
          </nav>
          <div className={cls.navItems}>
            <button className={cls.registrationUser}>
              <Image src={userIcon} width={15} height={20} alt='registrationUser' />
            </button>
            <button className={cls.registrationUser}>
              <Image src={favoriteIcon} width={20} height={17} alt='registrationUser' />
            </button>
            <button className={cls.registrationUser}>
              <Image src={cartIcon} width={19} height={20} alt='registrationUser' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
