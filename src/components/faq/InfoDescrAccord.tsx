export default function InfoDescrAccord({boldText, DescribtionBoldText}:{boldText:string[], DescribtionBoldText:string[]}) {
    return(
        <>
            {boldText.map((item, id) =>(
                <p key={id} className="min-[280px]:text-[14px] min-[900px]:text-[18px] font-[500] min-[280px]:leading-[21px] min-[900px]:leading-[26px] ml-[29px]"><span className="font-[600]">{item}</span>{DescribtionBoldText[id]}</p>
            ))}
            
        </>
    )
};
