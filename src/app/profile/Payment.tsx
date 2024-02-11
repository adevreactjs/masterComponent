'use client'

import visa from '@/assets/visa.png'
import trash from '@/assets/trash.svg'
import Image from 'next/image';
import cls from './index.module.scss';

const Payment = () => {
    const cards = [
        {number: '4441 1144 2976 0932', date: '09/25'},
        {number: '4441 1144 2976 0933', date: '09/26'},
        {number: '4441 1144 2976 0934', date: '09/27'},
    ]

    return (
        <>
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
        </>
    );
}
 
export default Payment;