export default function InfoDescrAccord({boldText, DescribtionBoldText}:{boldText:string[], DescribtionBoldText:string[]}) {
    return(
        <>
            {boldText.map((item, id) =>(
                <p key={id} className="text-[1vw] text-[#262626] pl-[2.4vw]"><b>{item}</b>{DescribtionBoldText[id]}</p>
            ))}
            
        </>
    )
};
