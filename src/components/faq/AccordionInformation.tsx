import InfoDescrAccord from './InfoDescrAccord';

interface stringObj {
  Num: string;
  point: string;
  boldText: string[];
  DescribeBoldText: string[];
}

export default function AccordionInformation({
  accordionInformation,
}: {
  accordionInformation: stringObj[];
}) {
  return (
    <>
      <>
        {accordionInformation.map((item, id) => (
          <div key={id}>
            <div className='flex flex-row min-[280px]:mb-[10px]'>
              <div className='flex gap-2'>
                <span className='bg-[#B9F072] rounded-[10px] min-[280px]:min-h-[26px] min-[280px]:min-w-[29px] min-[900px]:min-h-[28px] min-[900px]:min-w-[31px] flex justify-center items-center'>
                  {item.Num}
                </span>
                <p className='min-[280px]:text-[18px] min-[900px]:text-[22px] font-semibold leading-[26px]'>{item.point}</p>
              </div>
            </div>
            <InfoDescrAccord boldText={item.boldText} DescribtionBoldText={item.DescribeBoldText} />
          </div>
        ))}
      </>
    </>
  );
}
