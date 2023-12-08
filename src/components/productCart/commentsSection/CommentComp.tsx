import { ChangeEvent, useState } from "react";
import Image from 'next/image'
import { StaticImageData } from "next/image";
import goldenStar from '../../../assets/productCard/comments/Star 1.svg'
import messageIcon from "../../../assets/comment.svg"
import clipGrey from '../../../assets/productCard/comments/clip.svg'


// changable
interface Comment {
  name: string | null | undefined,
  image: StaticImageData,
  commentText: string;
  inputImg: string;
  date: string;
  marginB: string;
  reply: Comment[];
}


 type onAddReplyType = (text: string, parentComment: Comment) => void


export default function CommentComp({ comment, depth = 0, onAddReply }:{ comment:Comment, depth:number, onAddReply:onAddReplyType}) {

    const [replyText, setReplyText] = useState<string>('');
    const [isReplying, setIsReplying] = useState<boolean>(false);
  
    const handleAddReply = () => {
      onAddReply(replyText, comment);
      setReplyText('');
      setIsReplying(false);
    };
  
    const handleReplyClick = () => {
      setIsReplying(true);
    };
    const [ imageSrc, setImageSrc ] = useState('') 
    const handleRequestFile = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        const imgFile = files[0];

        const reader = new FileReader()
        reader.onload = () => {
          setImageSrc(reader.result as string)
        }
        reader.readAsDataURL(imgFile)
      }
    }
// changable
    const styleML = depth+20;
    const styleMB = comment.marginB;
    const containerStyle = {
      marginLeft: `${styleML}px`,
      marginBottom: `${styleMB}px`,
      '@media(max-width:1290px)': { 
        marginLeft: '0px'
      }
    };
    return(
        <>
          

          <div style={containerStyle} className="max-[1280px]:ml-0">
            <div className="parentComment flex flex-col border-[#F1F1F1] border-b-[1px] pt-[15px] pb-[15px]">
              <div className="parentComment__header flex flex-row justify-between items-center">
                <div className="flex flex-row gap-4 items-center">
                  <Image src={comment.image} alt="Avatar"/>
                  <p className="text-black font-semibold">{comment.name}</p>
                </div>
                <div className="ratingStars flex flex-row gap-[5px]">
                  <Image src={goldenStar} alt="goldStar"/>
                  <Image src={goldenStar} alt="goldStar"/>
                  <Image src={goldenStar} alt="goldStar"/>
                  <Image src={goldenStar} alt="goldStar"/>
                  <Image src={goldenStar} alt="goldStar"/>
                </div>
              </div>

              <p className="mt-2 mb-6">{comment.commentText}</p>
              {comment.inputImg.length > 0 ? <Image src={comment.inputImg} width={200} height={200} alt="inputImg"/> : ''}

              <div className="parentComment__footer flex flex-row justify-between text-[#6C6C6C]">
                <p>{comment.date}</p>
                <div className="flex flex-row items-center justify-between">
                  <div className="amountComments mr-[30px] flex flex-row items-center gap-2">
                    <Image src={messageIcon} alt="messageIcon"/>
                    <p>Коментарі{``}</p>
                  </div>
                  <p className="hover:cursor-pointer" onClick={handleReplyClick}>Відповісти</p>
                </div>
              </div>
            </div>
            {isReplying && ( 
              <div className="flex flex-row justify-between gap-6 mb-[69px] items-end">
              <div className="relative w-full flex items-center">
                <input id="uploadFile" type="file" className="hidden" accept="image/*, .png, .jpg, .gif, .web" onChange={e => handleRequestFile(e)}/>
                <input type="text" placeholder="Написати відгук" className="w-full bg-transparent border-b-[1px] border-[#C1C1C1] pr-[25px]" value={replyText} onChange={(e) => setReplyText(e.target.value)}/>
                <label htmlFor="uploadFile">
                  <Image src={clipGrey} alt="clipGrey" className="absolute top-[8%] right-0 hover:cursor-pointer"/>
                </label>
              </div>
              <button className="flex items-center justify-center h-[36px] w-[105px] pt-[6px] pr-[14px] pb-[7px] pl-[14px]  bg-[#B9FF61] rounded-[30px] text-center" onClick={handleAddReply}>Надіслати</button>
            </div>
            )}
            {comment.reply.length > 0 && (
              <div className="childComment">
                {comment.reply.map((reply, index) => (
                  <CommentComp key={index} comment={reply} depth={depth + 1} onAddReply={(text, parentComment) => onAddReply(text, parentComment)} />
                ))}
              </div>
            )}
          </div>
          
        </>
    )
};
