'use client';

import { useState } from 'react';
import AccordionInformation from './AccordionInformation';

interface stringObj {
  Num: string;
  point: string;
  boldText: string[];
  DescribeBoldText: string[];
}
export default function Accordion({
  Openheight,
  accordionInformation,
  Name,
}: {
  Openheight: string;
  accordionInformation: stringObj[];
  Name: string;
}) {
  const [click, setClick] = useState(false);

  const arrowDown = (
    <svg
      viewBox='0 0 17 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`min-[280px]:w-[24px] fill-current transition-all delay-75 ${
        click ? 'rotate-180' : 'rotate-0'
      }`}>
      <path d='M2.81909 0.471526L8.37435 6.02678L13.9296 0.471526C14.488 -0.0868629 15.39 -0.0868629 15.9484 0.471526C16.5068 1.02992 16.5068 1.93193 15.9484 2.49032L9.37658 9.06213C8.81819 9.62052 7.91618 9.62052 7.35779 9.06213L0.785979 2.49032C0.22759 1.93193 0.22759 1.02992 0.785979 0.471526C1.34437 -0.0725453 2.2607 -0.0868629 2.81909 0.471526Z' />
    </svg>
  );
  return (
    <div
      className={`min-[280px]:max-w-[260px] min-[320px]:min-w-[310px] min-[360px]:min-w-[360px] min-[741px]:max-w-[741px] overflow-hidden flex flex-col items-center transition-[height] delay-75 ${
        click ? Openheight : 'min-[280px]:h-[50px]'
      }`}>
      <div
        className={`w-full min-[280px]:min-h-[50px] min-[280px]:max-w-[270px] min-[320px]:max-w-[310px] min-[360px]:min-w-[360px] min-[741px]:max-w-[741px] flex flex-row justify-between items-center hover:cursor-pointer h-[50px] pr-[15px] pl-[20px] min-[741px]:pr-[20px] ${
          click ? 'bg-[#B9FF61]' : 'bg-[#F1F1F1]'
        }   rounded-[16px]`}
        onClick={() => setClick(!click)}>
        <p className='min-[280px]:text-[20px]'>{Name}</p>
        {arrowDown}
      </div>
      <div className='w-full pt-[1vw] flex flex-col min-[280px]:gap-[26px]'>
        <AccordionInformation accordionInformation={accordionInformation} />
      </div>
    </div>
  );
}
