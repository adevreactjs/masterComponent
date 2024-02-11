'use client'

import userPhoto from '@/assets/user-photo.png'
import componentsImage from '@/assets/componentsImage.svg'
import Image from 'next/image';
import cls from './index.module.scss';

const Avatar = () => {
    return (
        <>
            
                <div className='flex justify-between'>
                    <button className={cls.button}>Редагувати</button>
                    <button className={cls.button}>Вийти</button>
                </div>
                <div className="mt-[22px] flex flex-col items-center mb-[10px]">
                    <Image src={userPhoto} alt='user photo' width={85} height={85}/>
                    <div className={cls.userFullName}>Роман Романович</div>
                </div>
                <div className={cls.bonuses}>
                    <div className={cls.bonusesName}>Бонуси</div>
                    <div className={cls.bonusesCount}>
                        63 
                        <div className={cls.bonusesImage}>
                            <Image src={componentsImage} alt='' width={10} height={10}/>
                        </div>
                    </div>
                </div>
        
        </>
    );
}
 
export default Avatar;