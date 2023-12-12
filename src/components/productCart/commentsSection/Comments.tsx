'use client'
import { StaticImageData } from "next/image"
import { useSession } from "next-auth/react"
import Image from "next/image"

import defaulIcon from "../../../assets/avatar.svg"
import Vitaliy from '../../../assets/productCard/comments/Vitaliy.png'
import Roman from '../../../assets/productCard/comments/Roman.png'
import Sergiy from '../../../assets/productCard/comments/Sergiy.png'
import Yuli from '../../../assets/productCard/comments/Yulia.png'
import Pavlo from '../../../assets/productCard/comments/Pavlo.png'
import avatarIcon from '../../../assets/avatar.svg';
import clip from '../../../assets/productCard/comments/clip.svg'
import clipGray from "../../../assets/productCard/comments/clipGray.svg"
import CommentsHandle from "./CommentsHandle"
import { ChangeEvent, useState } from "react"
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
    reply: commentChild[]
}

export default function Comments() {
    const { data: session } = useSession()
    const allComments:commentParent[] = [
        {
            name: "Віталій",
            image: Vitaliy,
            inputImg: "",
            commentText: "Задоволений роботою. Швидкість передачі даних інтегрованого Wi-Fi вражає, а підтримка новітніх процесорів дозволяє максимально використовувати їх потужність.",
            date: "01.02.2023",
            marginB: "54",
            reply: [
                {
                    name: "Роман",
                    image: Roman,
                    inputImg: "",
                    commentText: "На жаль, виявив проблеми з інтегрованим Wi-Fi на материнській платі. Швидкість передачі даних не відповідає заявленим характеристикам, що призвело до нестабільного з'єднання.",
                    date: "01.02.2023"
                }
            ]
        },
        {
            name: "Юлія",
            image: Yuli,
            inputImg: "",
            commentText: "Ідеальне поєднання якості та функціональності. Легка у встановленні, має велику кількість роз'ємів для розширення функціоналу комп'ютера. Рекомендую як надійний компонент для збірки потужного ПК.",
            date: "01.02.2023",
            marginB: "54",
            reply: [
                {
                    name: "Сергій",
                    image: Sergiy,
                    inputImg: "",
                    commentText: "Хоча функціональність материнської плати і вражає, але в процесі монтажу зіткнувся з проблемою - деякі роз'єми можуть бути зайняті при встановленні деяких великих компонентів, що ускладнює розширення функціоналу. Для мене це стало певним недоліком у використанні даної моделі",
                    date: "01.02.2023"
                },
                {
                    name: "Павло",
                    image: Pavlo,
                    inputImg: "",
                    commentText: "Повністю підтверджую. Багато роз'ємів і портів дають можливість максимально розширити можливості комп'ютера. Рекомендую як найкращий вибір для створення потужного ПК!",
                    date: "01.02.2023"
                }
            ]
        },
    ]
    const [ commentsState, setCommentsState ] = useState(allComments)

    const [ fileInput, setFileInput ] = useState<File>()
    const [ textInput, setTextInput ] = useState('')

    function importingFile(e: ChangeEvent<HTMLInputElement>) {
        const imgFile = e.target.files?.[0];
        if(imgFile !== undefined) {setFileInput(imgFile)};
    }

    function parentHandleInputRequest() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString().replace(/\//g, '.');
      
        const newObj: commentParent = {
          name: session?.user?.name,
          image: session?.user?.image || defaulIcon,
          inputImg: '',
          commentText: textInput,
          date: formattedDate,
          marginB: '54',
          reply: [],
        };
      
        if (fileInput) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target) {
              const imgUrl = e.target.result as string;
              newObj.inputImg = imgUrl;
      
              // Update state after the image is loaded
              const updateObj = [newObj, ...commentsState];
              setCommentsState(updateObj);
            }
          };
          reader.readAsDataURL(fileInput);
        } else {
          // If there is no file input, update the state immediately
          if(textInput !== '') {
            const updateObj = [newObj, ...commentsState];
            setCommentsState(updateObj);
          }
          
        }
        setTextInput('')
        setFileInput(undefined)
    }
      

    return(
        <div className="min-[1300px]:max-w-[711px]">
            <div className=" desktop-input min-[1300px]:flex max-[1300px]:hidden mt-[97px] mb-[69px] gap-[24px] items-end">
                <div className="flex flex-row relative h-[29px] w-[581px]">
                    <input type="text" placeholder="Написати відгук" value={textInput} onChange={(event)=>setTextInput(event.target.value)} className="border-b-[1px] border-[#C1C1C1] min-w-[581px] placeholder-[#C1C1C1] h-[29px] bg-transparent pb-[9px]"/>
                    <label htmlFor="file" className="absolute right-0 h-full flex items-center pb-[9px]">
                        <Image src={clip} alt="clip"/>
                        <input type="file" id="file" className="hidden" onChange={importingFile}/>
                    </label>
                </div>
                <button onClick={parentHandleInputRequest} className="w-[105px] h-[36px] flex justify-center items-center rounded-[30px] pt-[6px] pr-[14px] pb-[7px] pl-[14px] bg-[#B9FF61]">Надіслати</button>
          </div>
          <div className="mobile-input min-[280px]:flex min-[1300px]:hidden min-full flex-col items-center gap-[30px] mb-[45px]">
              <div className="flex-row overflow-hidden border-[1px] border-[#C1C1C1] min-h-[151px] w-full rounded-[12px]">
                    <div className="user bg-[#F1F1F1] h-[46px] w-full pl-3 pt-2 pb-2 pr-3 flex items-center justify-between">
                        <div className="flex flex-row items-center">
                            <Image src={session?.user?.image || defaulIcon} alt="user avatar"/>
                            <span className="user-name ml-[9px] text-[16px] leading-[20px] font-semibold">{session?.user?.name || "Степка"}</span>
                        </div>
                        <label htmlFor="file">
                            <Image src={clipGray} alt="clip"/>
                            <input type="file" id="file" className="hidden" onChange={importingFile}/>
                        </label>
                    </div>
                    <textarea value={textInput} onChange={(event)=>setTextInput(event.target.value)} className="w-full h-full bg-[#FBFBFB] pl-[14px] pt-[15px] text-[#6C6C6C] placeholder:text-[#6C6C6C] text-[14px] placeholder:text-[14px]" placeholder="Ваш відгук..."></textarea>
              </div>
              <button onClick={parentHandleInputRequest} className="w-[105px] h-[36px] flex justify-center items-center rounded-[30px] pt-[6px] pr-[14px] pb-[7px] pl-[14px] bg-[#B9FF61]">Надіслати</button>
          </div>
            {commentsState.map( (item, index) => (
                <CommentsHandle key={index} comment={item}/>
            ))}
        </div>
    )
};
