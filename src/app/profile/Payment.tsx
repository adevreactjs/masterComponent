'use client'

import visa from '@/assets/visa.svg'
import masterCard from '@/assets/mastercard.svg'
import trash from '@/assets/trash.svg'
import Image from 'next/image';
import cls from './index.module.scss';

const Payment = () => {
    const cards = [
        {number: '4441 1144 2976 0932', date: '09/25'},
        {number: '5425 2334 3010 9903', date: '09/26'},
        {number: '4441 1144 2976 0934', date: '09/27'},
    ]

    const checkCard = (number: string) => { 
        const firstDigital = number[0]

        switch(firstDigital) {
            case '4':
                return visa
            case '5':
                return masterCard
            default:
                return masterCard
        }
    }

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
                            <Image src={checkCard(card.number)} alt='visa' width={31} height={9}/>
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