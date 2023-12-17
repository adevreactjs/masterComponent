import Image from "next/image"
import greenGear from "../../assets/basket/greenGear.svg"
import minus from "../../assets/basket/minus.svg"
import plus from "../../assets/basket/plus.svg"
import { useState } from "react"

interface basketObj {
    name: string,
    bonuses: string,
    cost: string[]
}
export default function AddToBasket({item}:{item:basketObj}) {
    const [ num, setNum ] = useState(1)
    const greySquare = (<div className="bg-[#D9D9D9] min-[280px]:w-[40px] min-[280px]:h-[40px] min-[1300px]:w-[60px] min-[1300px]:h-[60px] rounded-[6px]"></div>)
    return(
        <>
            <div className="flex flex-row  min-[280px]:gap-[10px] min-[1300px]:gap-[23px] min-[280px]:h-[40px] min-[1300px]:h-[60px]">
                {greySquare}
                <div className="text-and-bonus flex flex-col min-[280px]:w-[195px] min-[1300px]:w-[282px] gap-[6px]">
                    <span className="min-[280px]:text-[14px] min-[280px]:leading-[20px] min-[280px]:font-semibold min-[1300px]:text-[18px] min-[1300px]:leading-[24px] min-[1300px]:font-medium">{item.name}</span>
                    <div className="flex flex-row min-[280px]:gap-[3px] min-[1300px]:gap-[4px]">
                        <span>+{item.bonuses}</span>
                        <Image src={greenGear} alt="greenGear"/>
                    </div>
                </div>
                <div className="flex flex-row items-center min-[280px]:gap-[10px] min-[1300px]:gap-[14px] min-[280px]:h-[24px] min-[1300px]:h-[32px] border-[1px] border-[#C1C1C1] rounded-[20px]">
                    <Image src={minus} alt="" className="min-[280px]:w-[7px] min-[1300px]:w-[9px]"/>
                    <span className="min-[280px]:text-[14px] min-[1300px]:text-[18px]">{num}</span>
                    <Image src={plus} alt="" className="min-[280px]:w-[7px] min-[1300px]:w-[9px]"/>
                </div>
            </div>
        </>
    )
};
