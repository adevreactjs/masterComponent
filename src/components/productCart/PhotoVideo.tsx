import Image from 'next/image';
import cls from './index.module.scss';
import mathImg from '@/assets/mathBordImg.jpg'

const PhotoVideo = () => {
  return (
    <div className={cls.photoVideo}>
      <div className={cls.mainPhoto}>
        <Image className="object-contain" src={mathImg} width={711} height={426} alt='img'/>
      </div>
    </div>
  );
}

export default PhotoVideo