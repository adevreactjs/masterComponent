'use client';
import CategoryCard from '@/components/categoryCart/CategoryCard';
import PaginationNavigation from '@/components/pagination/PaginationNavigation';
import ParamsFilter from '@/components/paramsFilter/ParamsFilter';
import RangeSlider from '@/components/rangeSlider/RangeSlider';
import viewIcon from '@/assets/viewIcon.svg';
import filterIcon from '@/assets/filterIcon.svg';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cls from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { openMobileFilterHandler } from '@/app/store/reducers/MobileFilterSlice';
import { chooseProduct, loadData } from '../../store/reducers/LoadDataProducts';
// import { products } from '../../api/mockDataProducts';
import axios from 'axios';
import { Product } from '@/types/type';

const Page = ({params}: any) => {
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const [sortValue, setSortValue] = useState(0);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null)
  const dispatch = useDispatch();
  const isOpenMobileFilter = useSelector(
    (state: RootState) => state.mobileFilter.isOpenMobileFilter,
  );
  const productsItems = useSelector((state: RootState) => state.productItems.products);
  const filterParams = [
    {
      id: '1',
      title: 'Наявність у магазинах',
      params: ['1', '2', '3', '4', '5', '6'],
    },
    {
      id: '2',
      title: 'Оплата частинами',
      params: ['7', '8', '9', '10', '11', '12'],
    },
    {
      id: '3',
      title: 'Статус материнської плати',
      params: ['Білий', 'Зелений', 'Коричневий', 'Сірий', 'Синій', 'Червоний'],
    },
  ];

  useEffect(() => {
    axios.get(`https://online-store-1g8i.onrender.com/products/filter/?category=${params.category}`).then((res: any) => setProducts(res.data)) 
  }, [params])

  

  const sortMenu = ['Популярністю', 'Рейтингом', 'Ціною (дорожче)', 'Ціною (дешевше)'];

  const changeSortValue = (ind: number) => {
    setSortValue(ind);
    setOpenSortMenu(false);
  };

  const openFilterMenu = () => {
    dispatch(openMobileFilterHandler(!isOpenMobileFilter));
  };

  const sortProductById = (id: number) => {
    dispatch(chooseProduct(id));
  };

  useEffect(() => {
    // dispatch(loadData(products));
  }, [dispatch]);

  return (
    <div className={cls.category}>
      <div className='flex w-full gap-x-[32px]'>
        <div className={cls.filterMenu}>
          <div className='flex w-[324px] items-center justify-between mb-[20px]'>
            <p className='text-[22px] normal font-semibold leading-normal'>Фільтри</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='12'
              viewBox='0 0 18 12'
              fill='none'>
              <path
                d='M8 12H10C10.55 12 11 11.55 11 11C11 10.45 10.55 10 10 10H8C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM4 7H14C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5H4C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7Z'
                fill='#262626'
              />
            </svg>
          </div>
          <RangeSlider />
          {filterParams.map(param => (
            <ParamsFilter key={param.id} param={param} />
          ))}
        </div>
        <div className='w-full'>
          <div className={cls.sortMenu}>
            <p className={cls.categoryTitle}></p>
            <div className='flex gap-x-[6px] relative items-baseline'>
              <p
                className='text-[16px] normal font-medium leading-normal'
                onClick={() => setOpenSortMenu(!openSortMenu)}>
                Сотувати за: {sortMenu[sortValue]}
              </p>
              <div
                className={openSortMenu ? `${cls.sortListArrow} ${cls.arrow}` : cls.sortListArrow}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='7'
                  viewBox='0 0 12 7'
                  fill='none'>
                  <path
                    d='M2.12461 0.2925L6.00461 4.1725L9.88461 0.2925C10.2746 -0.0975 10.9046 -0.0975 11.2946 0.2925C11.6846 0.6825 11.6846 1.3125 11.2946 1.7025L6.70461 6.2925C6.31461 6.6825 5.68461 6.6825 5.29461 6.2925L0.704609 1.7025C0.314609 1.3125 0.314609 0.6825 0.704609 0.2925C1.09461 -0.0875 1.73461 -0.0975 2.12461 0.2925Z'
                    fill='#3B3B3B'
                  />
                </svg>
              </div>

              <div className={openSortMenu ? cls.sortList : cls.closeSortMenu}>
                <ul>
                  {sortMenu.map((value, ind) => (
                    <li key={ind} onClick={() => changeSortValue(ind)}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={cls.filterButtons}>
              <button className={cls.viewButton}>
                <Image src={viewIcon} width={18} height={18} alt='viewIcon' />
              </button>
              <button className={cls.filterButton} onClick={openFilterMenu}>
                <Image src={filterIcon} width={18} height={18} alt='filterIcon' />
              </button>
            </div>
          </div>
          <div className={cls.categoryCart}>
            {products && products.map((product: any) => (
              <div key={product.id} onClick={() => sortProductById(product.id)}>
                <CategoryCard key={product.id} product={product} />
              </div>
            ))}
          </div>
          <p className='text-grey text-center w-full text-[16px] normal font-semibold leading-normal underline mb-[39px] cursor-pointer'>
            Показати ще 20/144
          </p>
          <PaginationNavigation />
        </div>
      </div>
    </div>
  );
};

export default Page;
