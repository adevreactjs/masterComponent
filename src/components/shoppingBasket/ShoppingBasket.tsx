import cross from "../../assets/basket/cross.svg"
import gear from "../../assets/basket/gear.svg"
import Image from 'next/image'
export default function ShoppingBasket() {
    const stylesBTN = `
    min-[280px]:pt-[8px]
    min-[1300px]:pt-[11px]

    min-[280px]:pb-[8px]
    min-[1300px]:pb-[11px]

    min-[280px]:pr-[20px]
    min-[1300px]:pr-[24px]

    min-[280px]:pl-[20px]
    min-[1300px]:pl-[24px]

    min-[280px]:h-[44px]
    min-[1300px]:h-[50px]

    min-[280px]:w-[219px]
    min-[1300px]:w-[249px]
    `
    const basketStyles = `
    min-[280px]:pt-[20px]
    min-[280px]:pb-[40px]

    min-[280px]:pr-[16px]
    min-[280px]:pl-[16px]

    min-[1300px]:p-[40px]

    min-[280px]:rounded-[8px]
    min-[1300px]:rounded-[30px]
    `
    return(
        <div className={`min-[280px]:w-[270px] min-[360px]:w-[328px] min-[1300px]:w-[708px] bg-[#FFFFFF] ${basketStyles}`}>
            <div className="flex flex-row justify-between items-center">
                <div className="min-[280px]:gap-[20px] min-[1300px]-gap[23px] flex flex-row items-center">
                    <span className="font-semibold min-[280px]:text-[18px] min-[1300px]:text-[22px]">Кошик</span>
                    <span className="font-medium text-[#6C6C6C]"><span>{0}</span> товарів</span>
                </div>
                <Image src={cross} alt="cross" className="min-[280px]:w-[14px] min-[1300px]:w-[20px] min-[280px]:h-[14px] min-[1300px]:h-[20px]"/>
            </div>
            <div className="mt-[60px] mb-[60px]">
                <p className="text-center min-[280px]:text-[20px] min-[280px]:leading-[24px] min-[1300px]:text-[26px] min-[1300px]:leading-[31.2px] font-medium text-[#C1C1C1]">Наразі ваш кошик пустий</p>
            </div>
            <div className="flex min-[280px]:flex-col min-[1300px]:flex-row">
                <div className="w-full flex min-[280px]:flex-col min-[280px]:gap-[20px] min-[1300px]:flex-row min-[1300px]:gap-[82px] items-center">
                    <div className="flex flex-col min-[1300px]:w-[287px] min-[280px]:w-full  min-[280px]:gap-0 min-[1300px]:gap-[16px]">
                        <div className="flex flex-row text-[#6C6C6C] min-[280px]:justify-between min-[1300px]:gap-[67px] items-center">
                            <span className="min-[1300px]:text-[18px] min-[1300px]:leading-[21.6px] min-[280px]:text-[14px] min-[280px]:leading-[16.8px]">Нараховано бонусів</span>
                            <div className="flex flex-row gap-1">
                                <span>+{0}</span>
                                <Image src={gear} alt="gear"/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="min-[280px]:text-[16px] min-[1300px]:text-[18px] font-medium text-[#6C6C6C]">Разом:</span>
                            <span className="min-[280px]:text-[16px] min-[1300px]:text-[22px] font-semibold text-[#262626] leading-[24px]">0 ₴</span>
                        </div>
                    </div>
                    <button className={`make-order bg-[#F1F1F1] rounded-[200px] ${stylesBTN}`}>
                        <span className="font-semibold leading-[28px] min-[280px]:text-[16px] min-[1300px]:text-[18px] text-[#262626]">Оформити замовлення</span>
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    )
};
