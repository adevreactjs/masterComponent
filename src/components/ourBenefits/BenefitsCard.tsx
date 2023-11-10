export default function BenefitsCard({Num, Point, Text}:{Num:string, Point:string, Text:string}) {
    return(
        <div className=" flex flex-col bg-[#F1F1F1] rounded-3xl p-[1vw] max-[600px]:rounded-xl max-[400px]:rounded-lg min-[920px]:w-[25vw]">
            <div  className="flex flec-row border-[#262626] border-b-[0.15vw] min-[920px]:h-[3vw] min-[280px]:h-[23px]">
                <p className="text-[1.3vw] min-[280px]:text-[13px] min-[795px]:text-[1.5vw]"><span className="pl-[0.7vw] pr-[0.7vw] pt-[0.2vw] pb-[0.2vw] text-center bg-[#B9FF61] rounded-xl mr-2 max-[710px]:pl-[1.2vw] max-[710px]:pr-[1.2vw] max-[430px]:pl-[2vw] max-[430px]:pr-[2vw]">{Num}</span><b>{Point}</b></p>
            </div>

            <p className="text-[1vw] text-[#4E4E4E] w-[24vw] leading-[1vw] mt-[1vw] min-[280px]:w-[201px] min-[280px]:text-[10px] min-[280px]:leading-[11px] min-[500px]:text-[7px] min-[500px]:w-[205px] min-[680px]:text-[8px] max-[795px]:text-[1vw] max-[795px]:w-[29vw] min-[920px]:text-[1.1vw] min-[920px]:w-[23vw] min-[920px]:leading-[1.4vw]">{Text}</p>
        </div>
    )
};
