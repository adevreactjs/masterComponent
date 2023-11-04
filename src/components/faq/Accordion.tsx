'use client'

import { useState } from "react"
import AccordionInformation from "./AccordionInformation"


interface stringObj {
    Num: string,
    point: string,
    boldText: string[],
    DescribeBoldText: string[]
}
export default function Accordion({Openheight, accordionInformation, Name}:{Openheight:string, accordionInformation:stringObj[], Name:string}) {
    const [click, setClick] = useState(false)


    const arrowDown =   (<svg viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-[1.4vw] min-[280px]:w-[10px] min-[500px]:w-[2vw]  fill-current transition-all delay-75 ${click ? 'rotate-180' : 'rotate-0'}`}>
                            <path d="M2.81909 0.471526L8.37435 6.02678L13.9296 0.471526C14.488 -0.0868629 15.39 -0.0868629 15.9484 0.471526C16.5068 1.02992 16.5068 1.93193 15.9484 2.49032L9.37658 9.06213C8.81819 9.62052 7.91618 9.62052 7.35779 9.06213L0.785979 2.49032C0.22759 1.93193 0.22759 1.02992 0.785979 0.471526C1.34437 -0.0725453 2.2607 -0.0868629 2.81909 0.471526Z"/>
                        </svg>)
    return(
        <div className={`min-[280px]:w-[75vw] overflow-hidden flex flex-col items-center transition-[height] delay-75 ${click ? Openheight :'h-[3.3vw] min-[280px]:h-[8vw] min-[500px]:h-[6vw]'}`}>
            <div className={`w-full min-h-[8vw] min-[500px]:min-h-[6vw] rounded-lg pl-4 pr-3 flex flex-row justify-between items-center hover:text-green-900 ${click ? 'bg-[#B9FF61]' : 'bg-[#F1F1F1]'}`} onClick={() => setClick(!click)}>
                <p className="text-[2vw] min-[280px]:text-[14px] min-[500px]:text-[3vw]">{Name}</p>
                {arrowDown}
            </div>
            <div className="w-[50vw] pt-[1vw] flex flex-col min-[280px]:w-[72vw]">
                <AccordionInformation accordionInformation={accordionInformation}/>
            </div>
        </div>
    )
};
