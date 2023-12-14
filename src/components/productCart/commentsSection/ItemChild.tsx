'use client'
import { useState } from "react"
import { StaticImageData } from "next/image"
import Image from "next/image"
import goldStar from "../../../assets/productCard/comments/Star 1.svg"
import like from "../../../assets/productCard/comments/likeComments.svg"
import dislike from "../../../assets/productCard/comments/dislikeComments.svg"

interface commentChild {
    name: string | null | undefined;
    image: StaticImageData;
    inputImg: string;
    commentText: string;
    date: string;
}
export default function ItemChild({replyComment}:{replyComment:commentChild}) {
    const [ likeAmount, setLikeAmount ] = useState(0)
    const [ dislikeAmount, setDislikeAmount ] = useState(0)

    const [ liked, setLiked ] = useState(false)
    const [ disliked, setDisliked ] = useState(false)
    function likeMe() {
        if(liked === false) {
            setLikeAmount(likeAmount+1)
            if(dislikeAmount-1 < 0) {setDislikeAmount(dislikeAmount)} else {setDislikeAmount(dislikeAmount-1)}
            setLiked(true)
            setDisliked(false)
        }
    }
    function dislikeMe() { 
        if(disliked === false) {
            setDislikeAmount(dislikeAmount+1)
            if(likeAmount-1 < 0) {setLikeAmount(likeAmount)} else {setLikeAmount(likeAmount-1)}
        }
        setDisliked(true)
        setLiked(false)
    }
    return(
        <>
            <div className="min-[280px]:mt-[12px] min-[1300px]-mt-[15px] pt-[15px] pb-[15px] border-b-[1px] border-[#F1F1F1] min-[280px]:ml-[16px] min-[1300px]:ml-[39px]">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-[9px]">
                      <Image src={replyComment.image} alt="avatar" className="w-[30px] h-[30px]"/>
                      <span className="text-[16px] font-semibold">{replyComment.name}</span>
                    </div>
                    <div className="flex flex-row gap-[1px]">
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                      <Image src={goldStar} alt="golden star" width={18} height={18}/>
                    </div>
                  </div>
                  {replyComment.inputImg !== '' ? <Image src={replyComment.inputImg} alt="users img" width={200} height={200} className="mt-2"/> : ''}
                  <p className="min-[280px]:leading-[20px] min-[1500px]:leading-[23px] text-[14px] mt-2 mb-[27.5px]">{replyComment.commentText}</p>
                  <div className="flex flex-row justify-between">
                      <span className="text-[14px] leading-normal text-[#6C6C6C] font-normal">{replyComment.date}</span>
                      <div className="flex flex-row LIKED SYSTEM gap-[20px]">
                        <div className="flex flex-row items-center gap-1 hover:cursor-pointer" onClick={likeMe}>
                          <Image src={like} alt="like" className="w-[24px] h-[24px]"/>
                          <span className="text-[14px] text-[#6C6C6C] leading-[23px] font-medium">{likeAmount}</span>
                        </div>
                        <div className="flex flex-row items-center gap-1 hover:cursor-pointer" onClick={dislikeMe}>
                          <Image src={dislike} alt="like" className="w-[24px] h-[24px]"/>
                          <span className="text-[14px] text-[#6C6C6C] leading-[23px] font-medium">{dislikeAmount}</span>
                        </div>
                      </div>
                  </div>
                </div>
        </>
    )
};
