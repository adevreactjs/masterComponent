'use client';
import ParamsFilter from '@/components/paramsFilter/ParamsFilter';
import cls from './index.module.scss';
import CategoryCard from '@/components/categoryCart/CategoryCard';
import cartImg from '@/assets/mathRog.jpg';
import PaginationNavigation from '@/components/pagination/PaginationNavigation';
import viewIcon from '@/assets/viewIcon.svg';
import filterIcon from '@/assets/filterIcon.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { openMobileFilterHandler } from '../store/reducers/MobileFilterSlice';
import NewsCart from '@/components/newsCart/NewsCart';

const Page = () => {
  // const products = useSelector((state: RootState) => state.productItems.products);
  const dispatch = useDispatch();
  const isOpenMobileFilter = useSelector(
    (state: RootState) => state.mobileFilter.isOpenMobileFilter,
  );
  const { goods, favoriteGoodsIds } = useSelector((state:any) => state.GoodsCards)
  
  const products = goods.filter((good: any) => favoriteGoodsIds.includes(good.id));

  const params = [
    {
      id: '1',
      title: 'Комплектуючі',
      params: ['1', '2', '3', '4', '5', '6'],
    },
    {
      id: '2',
      title: 'Монітори',
      params: ['7', '8', '9', '10', '11', '12'],
    },
    {
      id: '3',
      title: 'Периферія',
      params: ['Білий', 'Зелений', 'Коричневий', 'Сірий', 'Синій', 'Червоний'],
    },
    {
      id: '4',
      title: 'Мережеве обладнання',
      params: ['Білий', 'Зелений', 'Коричневий', 'Сірий', 'Синій', 'Червоний'],
    },
  ];
  const openFilterMenu = () => {
    dispatch(openMobileFilterHandler(!isOpenMobileFilter));
  };
  
  return (
    <div className={cls.favorite}>
      <div className={cls.container}>
        <div className={cls.favoriteTitle}>
          <h1>Товари, що сподобалися</h1>
          <p>{products.length} товарів</p>
          <div className={cls.filterButtons}>
            <button className={cls.viewButton}>
              <Image src={viewIcon} width={18} height={18} alt='viewIcon' />
            </button>
            <button className={cls.filterButton} onClick={openFilterMenu}>
              <Image src={filterIcon} width={18} height={18} alt='filterIcon' />
            </button>
          </div>
        </div>
        <div className={cls.favoriteProducts}>
          <div className={cls.favoriteFilter}>
            {params.map(param => (
              <ParamsFilter key={param.id} param={param} />
            ))}
          </div>
          <div className={cls.favoriteItems}>
            {products.map((product: any) => (
              <CategoryCard key={product.id} product={product} />
              // <NewsCart key={product.id}
              // id={product.id}
              // product={product}/>
            ))}
          </div>
        </div>
        <p className='text-grey text-center w-full text-[16px] normal font-semibold leading-normal underline mb-[39px] cursor-pointer'>
          Показати ще 20/144
        </p>

        <PaginationNavigation />
      </div>
    </div>
  );
};

export default Page;

// const products = [
//   {
//     promotion: true,
//     image: cartImg,
//     code: 1040267,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: true,
//     image: cartImg,
//     code: 3240672,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: true,
//     image: cartImg,
//     code: 3314067,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: false,
//     image: cartImg,
//     code: 3040267,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: false,
//     image: cartImg,
//     code: 3244067,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: false,
//     image: cartImg,
//     code: 3540657,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
//   {
//     promotion: false,
//     image: cartImg,
//     code: 3046067,
//     title: 'Материнська плата Asus PRIME Z790-P',
//     price: 3499,
//     sale: 200,
//   },
// ];