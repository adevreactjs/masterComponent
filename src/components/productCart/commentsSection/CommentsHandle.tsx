import { useSession } from "next-auth/react"
import Image, { StaticImageData } from "next/image"
import avatarIcon from '../../../assets/avatar.svg';
import clip from '../../../assets/productCard/comments/clip.svg'
import commentIcon from "../../../assets/comment.svg"
import goldStar from "../../../assets/productCard/comments/Star 1.svg"

interface commentChild {
    name: string | null | undefined;
    image: StaticImageData;
    inputImg: string;
    commentText: string;
    date: string;
  }
  
  interface commentParent {
    name: string | null | undefined;
    image: StaticImageData;
    inputImg: string;
    commentText: string;
    date: string;
    marginB: string;
    reply: commentChild[];
  }
export default function CommentsHandle({comment}:{comment:commentParent}) {
    const { data: session } = useSession()
    return(
        <>
            <div className="parent min-[280px]:mb-[12px] min-[1300px]:mb-[54px]">
              <div className="border-b-[1px] border-[#F1F1F1] min-[280px]:pb-[12px] min-[1300px]:pb-[15px]">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-[9px]">
                    <Image src={comment.image} alt="avatar" className="w-[30px] h-[30px]"/>
                    <span className="text-[16px] font-semibold">{comment.name}</span>
                  </div>
                  <div className="flex flex-row gap-[1px]">
                    <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    <Image src={goldStar} alt="golden star" width={18} height={18}/>
                  </div>
                </div>
                {comment.inputImg !== '' ? <Image src={comment.inputImg} alt="users img" width={200} height={200}/> : ''}
                <p className="min-[280px]:leading-[20px] min-[1500px]:leading-[23px] text-[14px] mt-2 mb-[27.5px]">{comment.commentText}</p>
                <div className="flex flex-row justify-between">
                    <span className="text-[14px] leading-normal text-[#6C6C6C] font-normal">{comment.date}</span>
                    <div className="flex flex-row min-[280px]:gap-[20px] min-[1500px]:gap-[30px]">
                      <div className="flex flex-row gap-[4.5px]">
                        <Image src={commentIcon} alt="coments Icon" width={15} height={15}/>
                        <span className="leading-[23px] text-[14px] text-[#6C6C6C]">Коментарі</span>
                      </div>
                      <button className="text-[#6C6C6C] text-[14px] font-medium bg-transparent">Відповісти</button>
                    </div>
                </div>
              </div>
              {comment.reply.map( (item, index) => (
                <div key={index} className="min-[280px]:mt-[12px] min-[1300px]-mt-[15px] pt-[15px] pb-[15px] border-b-[1px] border-[#F1F1F1] min-[280px]:ml-[16px] min-[1300px]:ml-[39px]">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-[9px]">
                      <Image src={item.image} alt="avatar" className="w-[30px] h-[30px]"/>
                      <span className="text-[16px] font-semibold">{item.name}</span>
                    </div>
                    <div className="flex flex-row gap-[1px]">
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    </div>
                  </div>
                  <p className="min-[280px]:leading-[20px] min-[1500px]:leading-[23px] text-[14px] mt-2 mb-[27.5px]">{item.commentText}</p>
                  <div className="flex flex-row justify-between">
                      <span className="text-[14px] leading-normal text-[#6C6C6C] font-normal">{item.date}</span>
                      <div className="flex flex-row LIKED SYSTEM">
                        
                      </div>
                  </div>
                </div>
              ))}
            </div>
        </>
    )
};
