'use client';
import Image from 'next/image';
import btnArrow from '@/assets/btnArrow.svg'
import edit from '@/assets/edit.svg'
import Select from '@/components/Select';
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import BasketCart from '@/components/shoppingBasket/basketCart/BasketCart';
import Payment from './Payment';
import cls from './index.module.scss';
import Avatar from './Avatar';


const Page = () => {
    const settings = [
        {title: 'Пароль', password: 'dFiRfS3w@'},
        {title: 'Пошта', text: 'roman.romanovych@gmail.com'},
        {title: 'Телефон', text: '+380 632 775 333'},
    ]

    return ( 
        <div className={`flex gap-x-[30px] ${cls.container} !mb-32 max-[1367px]:px-[1rem] max-[1367px]:flex-col `}>
            <div className="left max-[1367px]:w-full">
                <div className="flex gap-[20px] max-[600px]:flex-col">
                    <div className={`${cls.smallBlock} w-[229px] max-[1367px]:w-full`}>
                        <Avatar />
                    </div>
                    <div className={`${cls.smallBlock} w-[315px] max-[1367px]:w-full`}>
                        <Payment />
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
                            <button className={`${cls.button} block max-[520px]:hidden`}>Змінити</button>
                            <button className='hidden max-[520px]:block'><Image src={edit} alt='edit'/></button>
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
                        <Accordion allowZeroExpanded className=''>
                            <AccordionItem> 
                                <AccordionItemButton>
                                    <div className={cls.orderBlock}>
                                        <div className={`${cls.orderBlockInfo} max-[520px]:hidden`}>114 товарів</div>
                                        <div className={cls.orderBlockInfo}>12/12/23</div>
                                        <div className={cls.orderBlockInfo}>12 000 грн</div>
                                        <div className={`${cls.orderBlockInfo} max-[520px]:hidden`}>В процесі</div>
                                        <div className=""><Image src={btnArrow} alt='' width={24} height={24}/></div>
                                    </div>  
                                </AccordionItemButton>
                                <AccordionItemPanel className={cls.accordionPanel}>
                                    <BasketCart typeFor='profile'/>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Page;