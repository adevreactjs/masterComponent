'use client';

import cls from './index.module.scss';
import Image from 'next/image';
import searchIcon from '../../assets/searchIcon.svg';
import btnArrow from '../../assets/btnArrow.svg';
import userIcon from '../../assets/userIcon.svg';
import favoriteIcon from '../../assets/favoriteIcon.svg';
import cartIcon from '../../assets/cartIcon.svg';
import menu from '../../assets/menu.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRegistrationFormHandler } from '@/app/store/reducers/RegistrationSlice';
import Link from 'next/link';
import LikedItems from './LikedItems';
import { RootState } from '@/app/store/store';
import RegistrationForm from '../registrationForm/RegistrationForm';
import ShoppingBasket from '../shoppingBasket/ShoppingBasket';
import { changeOpen } from '@/app/store/reducers/BasketSlice';
import MobileProductFilter from '../mobileProductFilter/MobileProductFilter';
import MobileMenu from '../mobileMenu/MobileMenu';
import HelpMenu from '../helpMenu/HelpMenu';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import { setGoods } from '@/app/store/reducers/GoodsCardsSlice';
import axios from 'axios';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeHelpMenu, setHelpActiveMenu] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openLiked, setOpenLiked] = useState(false);
  const isOpenCart = useSelector((state: RootState) => state.basket.open);
  const isOpenMobileFilter = useSelector(
    (state: RootState) => state.mobileFilter.isOpenMobileFilter,
  );
  const dispatch = useDispatch();

  const openBasketHandler = () => {
    dispatch(changeOpen(!isOpenCart));
  };

  const isOpenRegistrationForm = useSelector(
    (state: RootState) => state.registration.isOpenRegistrationForm,
  );
  const openCategory = () => {
    setActiveMenu(!activeMenu);
    setActiveCategory(0);
    setHelpActiveMenu(false);
  };
  const openHelpMenu = () => {
    setHelpActiveMenu(!activeHelpMenu);
    setActiveMenu(false);
  };

  const registrationFormHandler = () => {
    setActiveMobileMenu(false);
    dispatch(openRegistrationFormHandler(true));
  };


  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('https://online-store-1g8i.onrender.com/products/')
      dispatch(setGoods(data.data))
    }
    getData()
  }, [])

  return (
    <header className={cls.header}>
      {activeMobileMenu && <MobileMenu registrationFormHandler={registrationFormHandler} />}
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <Image
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className={cls.menu}
            src={menu}
            width={24}
            height={24}
            alt='menu'
          />
          <Link href={'/'} className={cls.logo}>
            MasterComponent
          </Link>
          <nav className={cls.navBar}>
            <div className={cls.searchBar}>
              <Image src={searchIcon} width={18} height={18} alt='search' />
              <input type='text' placeholder='Пошук...' />
            </div>
            <div className={cls.navBlock}>
              <ul className={cls.navCategories}>
                <li className={`${activeMenu && cls.active}`} onClick={openCategory}>
                  Каталог
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li className={`${activeHelpMenu && cls.active}`} onClick={openHelpMenu}>
                  Допомога
                  <Image className={cls.navBtn} src={btnArrow} width={24} height={24} alt='arrow' />
                </li>
                <li>Про компанію</li>
                {activeHelpMenu && <HelpMenu />}
              </ul>
            </div>
          </nav>
          <div className={cls.navItems}>
            <button
              className={cls.registrationUser}
              onClick={() => dispatch(openRegistrationFormHandler(true))}>
              <Image src={userIcon} width={15} height={20} alt='registrationUser' />
            </button>
            <Link href='/favorite' className={cls.favUser} onClick={() => setOpenLiked(!openLiked)}>
              <Image src={favoriteIcon} width={20} height={17} alt='registrationUser' />
            </Link>
            <button className={cls.cart} onClick={openBasketHandler}>
              <Image src={cartIcon} width={19} height={20} alt='registrationUser' />
            </button>
          </div>
          {activeMenu && <CategoryMenu />}
        </div>
        {isOpenMobileFilter && <MobileProductFilter />}
      </div>
      {openLiked && <LikedItems />}
      {isOpenRegistrationForm && <RegistrationForm />}
      {isOpenCart && <ShoppingBasket />}
    </header>
  );
};

export default Header;