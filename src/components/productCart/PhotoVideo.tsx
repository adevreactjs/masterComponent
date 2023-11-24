import Image from 'next/image';
import cls from './index.module.scss';
import mathImg from '@/assets/MathBord2.jpg';
import favIcon from '@/assets/favIcon.svg';
import productImg from '@/assets/mathCart.jpg';



const PhotoVideo = () => {
  return (
    <div className={cls.photoVideo}>
      <div className={cls.photoWrapper}>
        <div className={cls.mainPhoto}>
          <Image className='object-contain' src={mathImg} width={711} height={426} alt='img' />
        </div>
        <div className={cls.smallPhotos}>
          <Image className='object-contain' src={mathImg} width={341} height={277} alt='img' />
          <Image className='object-contain' src={mathImg} width={341} height={277} alt='img' />
        </div>
        <div className={cls.smallPhotos}>
          <Image className='object-contain' src={mathImg} width={341} height={277} alt='img' />
          <Image className='object-contain' src={mathImg} width={341} height={277} alt='img' />
        </div>
        <div className={cls.mainPhoto}>
          <Image className='object-contain' src={mathImg} width={711} height={426} alt='img' />
        </div>
      </div>
      <div>
        <div className={cls.productItem}>
          <div className={cls.productImage}>
            <Image
              className={cls.productImg}
              src={productImg}
              width={542}
              height={312}
              alt='productImg'
            />
            <div className={cls.bonus}>+15 бонусів</div>
            <button className={cls.favBtn}>
              <Image src={favIcon} width={30} height={26} alt='favIcon' />
            </button>
          </div>
          <div className={cls.description}>
            <h2>Материнська плата Asus PRIME Z790-P</h2>
            <div className={cls.price}>9 485 ₴</div>
            <div className={cls.sale}>10 579 ₴</div>
          </div>
          <ul>
            <li>(WIFI) D4</li>
            <li>DDR4 для ПК</li>
            <li>LGA1700</li>
            <li>ATX</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoVideo