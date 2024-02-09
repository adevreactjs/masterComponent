'use client';
import Image from 'next/image';
import cls from './index.module.scss';
import userPhoto from '@/assets/user-photo.png'
import componentsImage from '@/assets/componentsImage.svg'
import visa from '@/assets/visa.png'
import trash from '@/assets/trash.svg'
import btnArrow from '@/assets/btnArrow.svg'
import Select from '@/components/Select';

const Page = () => {
    const settings = [
        {title: 'Пароль', password: 'dFiRfS3w@'},
        {title: 'Пошта', text: 'roman.romanovych@gmail.com'},
        {title: 'Телефон', text: '+380 632 775 333'},
    ]

    const cards = [
        {number: '4441 1144 2976 0932', date: '09/25'},
        {number: '4441 1144 2976 0933', date: '09/26'},
        {number: '4441 1144 2976 0934', date: '09/27'},
    ]

    const options = [
        {value: 'in-procces', label: 'В процесі'},
        {value: 'date', label: 'Датою'},
        {value: 'cancel', label: 'Скасовано'},
    ]

    return ( 
        <div className={`flex gap-x-[30px] ${cls.container} !mb-32 max-[1367px]:px-[1rem]`}>
            <div className="left max-[1367px]:w-full">
                <div className="flex gap-[20px] max-[600px]:flex-col">
                    <div className={`${cls.smallBlock} w-[229px] max-[1367px]:w-full`}>
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
                    </div>
                    <div className={`${cls.smallBlock} w-[315px] max-[1367px]:w-full`}>
                        <div className="flex justify-between">
                            <div className={cls.method}>Спосіб оплати</div>
                            <button className={cls.button}>Додати</button>
                        </div>
                        <div className="mt-[25px]">
                            {cards.map((card, index) => (
                                <div key={index} className={cls.methodBlock}>
                                    <div className={`${cls.methodCard} max-[1367px]:!w-[90%]`}>
                                        <Image src={visa} alt='visa' width={28} height={8}/>
                                        <div className={cls.methodNumber}>{card.number}</div>
                                        <div className={cls.methodDate}>{card.date}</div>
                                    </div>
                                    <button>
                                        <Image style={{height: '20px'}} src={trash} alt='delete' width={18} height={20}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cls.mediumBlock}>
                    {settings.map((setting, index) => (
                        <div key={index} className={`flex items-center ${index!==settings.length-1 && 'border-b'} pb-[10px] mt-[10px]`}>
                            <div className={cls.mediumBlockTitle}>{setting.title}</div>
                            <div className="ml-[40px] flex items-center gap-[5px] h-full max-[520px]:ml-[16px]">
                                {setting.hasOwnProperty('password') ? (
                                    [...Array(14).keys()].map((el, key) => <div key={key} className={cls.blackCircle}></div>)
                                ) : (
                                    <div className={`${cls.mediumBlockText} max-[520px]:text-[12px]`}>{setting.text}</div>
                                )}
                            </div>
                            <div className="ml-auto"></div>
                            <button className={cls.button}>Змінити</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${cls.largeBlock} max-[1367px]:!max-w-full max-[1367px]:mt-[20px]`}>
                <div className="flex justify-between items-center">
                    <div className={cls.largeTitle}><span className='max-[500px]:hidden'>Мої</span> замовлення</div>
                    <div className={`${cls.largeSort} flex items-center`}>
                        Сортувати за: 
                        <Select />
                    {/* <button className='flex items-center ml-2'>Датою <Image src={btnArrow} alt=''/></button></div> */}
                    </div>
                </div>
                <div className="">
                    <div className={`${cls.titles} border-b pb-[8px] mt-[30px]`}>
                        <div className={`${cls.tableTitle} max-[520px]:hidden`}>Кількість</div>
                        <div className={cls.tableTitle}>Дата</div>
                        <div className={`${cls.tableTitle} max-[520px]:hidden`}>Сума</div>
                        <div className={cls.tableTitle}>Статус</div>
                    </div>
                    <div className="gap-y-[10px] mt-[14px]">
                        <div className={cls.orderBlock}>
                            <div className={`${cls.orderBlockInfo} max-[520px]:hidden`}>114 товарів</div>
                            <div className={cls.orderBlockInfo}>12/12/23</div>
                            <div className={cls.orderBlockInfo}>12 000 грн</div>
                            <div className={`${cls.orderBlockInfo} max-[520px]:hidden`}>В процесі</div>
                            <div className=""><Image src={btnArrow} alt='' width={24} height={24}/></div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Page;