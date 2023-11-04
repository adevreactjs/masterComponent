export default function InfoDescrAccord({boldText, DescribtionBoldText}:{boldText:string[], DescribtionBoldText:string[]}) {
    return(
        <>
            {boldText.map((item, id) =>(
                <p key={id} className="text-[1vw] text-[#262626] pl-[2.4vw] min-[280px]:text-[3vw] min-[280px]:pl-[4vw] min-[500px]:text-[2vw] min-[1000px]:text-[1.8vw]"><b>{item}</b>{DescribtionBoldText[id]}</p>
            ))}
            
        </>
    )
};
