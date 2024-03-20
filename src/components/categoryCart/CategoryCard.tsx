'use client';
import React, { FC } from 'react';
import cls from './index.module.scss';
import starIcon from '@/assets/starIcon.svg';
import privateIcon from '@/assets/privateIcon.png';
import monoIcon from '@/assets/monoIcon.png';
import alphaIcon from '@/assets/alphaIcon.png';
import favIcon from '@/assets/favoriteIcon.svg';
import cartIcon from '@/assets/cartIcon.svg';
import Image, { StaticImageData } from 'next/image';
import { Product } from '@/types/type';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface CategoryCardProps {
  product: Product;
}

const CategoryCard: FC<CategoryCardProps> = ({ product }) => {
  const router = useRouter();
  // const chooseProductCart = () => {
  //   //  dispatch(chooseProduct(product.id));
  //   router.push(`/category/product/${product.slug}`);
  // };

  console.log(product);
  

  return (
    // <Link href="/category/product/[id]" as={`/category/product/${product.slug}`} className={cls.cartItem}>
    <Link href={`/category/product/${product.slug}`} className={cls.cartItem}>
      <div className={cls.cart}>
        <div className={cls.cartWrapper}>
          <div className={cls.cartLabels}>
            <div className={product.promotion ? cls.promote : cls.cartLabel}>
              {product.promotion ? 'Акція' : 'Хіт продажу'}
            </div>
            <div className={cls.cartId}>Код:{product.code}</div>
          </div>
          <div className={cls.cartImage}>
            {/* <Image src={product.image} width={225} height={174} alt='cartImg' /> */}
            <img src={product.image} alt="cartImg" width={225} height={174}/>
          </div>
          <div className={cls.cartTitle}>
            <h1>{product.title}</h1>
          </div>
          <div className={cls.cartStars}>
            <div className={cls.cartStar}>
              <Image src={starIcon} width={18} height={18} alt='cartImg' />
              <div className={cls.cartStarCount}>4.2</div>
            </div>
            <div className={cls.availability}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='6'
                height='7'
                viewBox='0 0 6 7'
                fill='none'>
                <circle cx='3' cy='3.5' r='3' fill='#B9FF61' />
              </svg>
              Є в наявності
            </div>
          </div>
          <div className={cls.banks}>
            <div className={cls.bank}>
              <Image src={privateIcon} width={17} height={18} alt='privateIcon' />
              10 міс
            </div>
            <div className={cls.bank}>
              <Image src={monoIcon} width={21} height={19} alt='monoIcon' />6 міс
            </div>
            <div className={cls.bank}>
              <Image src={alphaIcon} width={14} height={19} alt='alphaIcon' />6 міс
            </div>
          </div>
          <div className={cls.cartPrice}>
            {product.promotion && <div className={cls.sales}>{product.price + 100} ₴</div>}
            {product.price} ₴
            <div className={cls.cartBtns}>
              <button className={cls.favoriteBtn}>
                <Image src={favIcon} width={18} height={16} alt='favIcon' />
              </button>
              <button className={cls.addToCartBtn}>
                <Image src={cartIcon} width={18} height={18} alt='cartIcon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

{/* <div className={cls.characteristic}>
  <ul>
    <li>(WIFI) D4</li>
    <li>DDR4 для ПК</li>
    <li>LGA1700</li>
    <li>ATX</li>
  </ul>
</div> */}