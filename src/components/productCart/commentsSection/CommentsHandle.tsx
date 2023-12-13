import { useSession } from "next-auth/react"
import { useDetectClickOutside } from 'react-detect-click-outside';

import Image, { StaticImageData } from "next/image"
import clip from '../../../assets/productCard/comments/clip.svg'
import commentIcon from "../../../assets/comment.svg"
import goldStar from "../../../assets/productCard/comments/Star 1.svg"
import { ChangeEvent, useState } from "react";
import clipGray from "../../../assets/productCard/comments/clipGray.svg"
import defaulIcon from "../../../assets/avatar.svg"
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
    const [ showInput, setShowInput ] = useState(false)
    const [ showImg, setShowImg ] = useState('')

    const [ textInput, setTextInput ] = useState('')

    function importingFileChild(e: ChangeEvent<HTMLInputElement>) {
      const imgFile = e.target.files?.[0];
      if (imgFile !== undefined) {
          const reader = new FileReader();
          reader.onload = (e) => {
              if (e.target) {
                  const imgUrl = e.target.result as string;
                  setShowImg(imgUrl);
              }
          };
          reader.readAsDataURL(imgFile);
      }
  }
  
  function childHandleInputRequest() {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString().replace(/\//g, '.');
  
      const newObjChild: commentChild = {
          name: session?.user?.name || "Степка",
          image: session?.user?.image || defaulIcon,
          inputImg: showImg, // Use the showImg state here
          commentText: textInput,
          date: formattedDate,
      };
      if(textInput !== '' || showImg !== '') {
        comment.reply.unshift(newObjChild);
      }
      
  
      setTextInput('');
      setShowImg('');
      setShowInput(false);
  }
  
  


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
                {comment.inputImg !== '' ? <Image src={comment.inputImg} alt="users img" width={200} height={200} className="mt-2"/> : ''}
                <p className="min-[280px]:leading-[20px] min-[1500px]:leading-[23px] text-[14px] mt-2 mb-[27.5px]">{comment.commentText}</p>
                <div className="flex flex-row justify-between">
                    <span className="text-[14px] leading-normal text-[#6C6C6C] font-normal">{comment.date}</span>
                    <div className="flex flex-row min-[280px]:gap-[20px] min-[1500px]:gap-[30px]">
                      <div className="flex flex-row gap-[4.5px]">
                        <Image src={commentIcon} alt="coments Icon" width={15} height={15}/>
                        <span className="leading-[23px] text-[14px] text-[#6C6C6C]">Коментарі</span>
                      </div>
                      <button className="text-[#6C6C6C] text-[14px] font-medium bg-transparent" onClick={() => setShowInput(true)}>Відповісти</button>
                    </div>
                </div>
                {showInput ?
                <div >
                  <div className="desktop-input min-[1300px]:flex max-[1300px]:hidden mt-[97px] mb-[69px] gap-[24px] items-end">
                    <div className="flex flex-row relative h-[29px] w-[581px]">
                        <input type="text" placeholder="Написати відгук" value={textInput} onChange={(event)=>setTextInput(event.target.value)} className="border-b-[1px] border-[#C1C1C1] min-w-[581px] placeholder-[#C1C1C1] h-[29px] bg-transparent pb-[9px]"/>
                        <label htmlFor="fileChild" className="absolute right-0 h-full flex items-center pb-[9px]">
                            <Image src={clip} alt="clip"/>
                            <input type="file" id="fileChild" className="hidden" onChange={importingFileChild} accept="image/*"/>
                        </label>
                    </div>
                    <button onClick={childHandleInputRequest} className="w-[105px] h-[36px] flex justify-center items-center rounded-[30px] pt-[6px] pr-[14px] pb-[7px] pl-[14px] bg-[#B9FF61]">Надіслати</button>
                  </div>

                  <div className="mobile-input min-[280px]:flex min-[1300px]:hidden min-full flex-col items-center gap-[30px] mb-[45px]">
                    <div className="flex-row overflow-hidden border-[1px] border-[#C1C1C1] min-h-[151px] w-full rounded-[12px]">
                        <div className="user bg-[#F1F1F1] h-[46px] w-full pl-3 pt-2 pb-2 pr-3 flex items-center justify-between">
                            <div className="flex flex-row items-center">
                                <Image src={session?.user?.image || defaulIcon} alt="user avatar"/>
                                <span className="user-name ml-[9px] text-[16px] leading-[20px] font-semibold">{session?.user?.name || "Степка"}</span>
                            </div>
                            <label htmlFor="fileChild">
                                <Image src={clipGray} alt="clip"/>
                                <input type="file" id="fileChild" className="hidden" onChange={importingFileChild} accept="image/*"/>
                            </label>
                        </div>
                        <textarea value={textInput} onChange={(event)=>setTextInput(event.target.value)} className="w-full h-full bg-[#FBFBFB] pl-[14px] pt-[15px] text-[#6C6C6C] placeholder:text-[#6C6C6C] text-[14px] placeholder:text-[14px]" placeholder="Ваш відгук..."></textarea>
                    </div>
                    <button onClick={childHandleInputRequest} className="w-[105px] h-[36px] flex justify-center items-center rounded-[30px] pt-[6px] pr-[14px] pb-[7px] pl-[14px] bg-[#B9FF61]">Надіслати</button>
                  </div>
                </div> : ''}
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
                  {item.inputImg !== '' ? <Image src={item.inputImg} alt="users img" width={200} height={200} className="mt-2"/> : ''}
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
