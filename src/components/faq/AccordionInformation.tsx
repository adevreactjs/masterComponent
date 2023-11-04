import InfoDescrAccord from "./InfoDescrAccord";

interface stringObj {
    Num: string,
    point: string,
    boldText: string[],
    DescribeBoldText: string[]
}

export default function AccordionInformation({accordionInformation}:{accordionInformation:stringObj[]}) {
    return(
        <>

                <>
                    {
                        accordionInformation.map((item, id) => (
                            <div key={id}>
                                <div  className="flex flec-row">
                                    <p className="text-[1.3vw]"><span className="pl-[0.7vw] pr-[0.7vw] pt-[0.2vw] pb-[0.2vw] text-center bg-[#B9FF61] rounded-xl mr-2">{item.Num}</span><b>{item.point}</b></p>
                                </div>
                                <InfoDescrAccord boldText={item.boldText} DescribtionBoldText={item.DescribeBoldText}/>
                            </div>
                        ))
                            
                    }
                    
                </>

            
        </>


    )
};
