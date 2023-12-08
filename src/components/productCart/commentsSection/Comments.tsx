'use client';

import { ChangeEvent, useRef, useState } from "react";
import CommentsList from "./CommentsList";
import { useSession } from 'next-auth/react';
import Image, { StaticImageData } from "next/image";

//imgs
import Vitaliy from '../../../assets/productCard/comments/Vitaliy.png'
import Roman from '../../../assets/productCard/comments/Roman.png'
import Sergiy from '../../../assets/productCard/comments/Sergiy.png'
import Yuli from '../../../assets/productCard/comments/Yulia.png'
import Pavlo from '../../../assets/productCard/comments/Pavlo.png'
import avatarIcon from '../../../assets/avatar.svg';
import clipGrey from '../../../assets/productCard/comments/clip.svg'


// changable
interface Comment {
  name: string | null | undefined;
  image: StaticImageData;
  inputImg: string;
  commentText: string;
  date: string;
  marginB: string;
  reply: Comment[];
}

export default function Comments() {
    // changable
    const [ imageSrc, setImageSrc ] = useState('') 
    const [ textComment, setTextComment] = useState('')
    const { data: session} = useSession();
    const [comments, setComments] = useState<Comment[]>([
        {
          name: "Віталій",
          image: Vitaliy,
          commentText: "Задоволений роботою. Швидкість передачі даних інтегрованого Wi-Fi вражає, а підтримка новітніх процесорів дозволяє максимально використовувати їх потужність.",
          inputImg: '',
          date: "01.02.2023",
          marginB: '52',
          reply: [
            {
              name: "Роман",
              image: Roman,
              commentText: "На жаль, виявив проблеми з інтегрованим Wi-Fi на материнській платі. Швидкість передачі даних не відповідає заявленим характеристикам, що призвело до нестабільного з'єднання.",
              inputImg: '',
              date: "01.02.2023",
              marginB: '',
              reply: []
            },
          ]
        },
        {
          name: "Юлія",
          image: Yuli,
          commentText: "Ідеальне поєднання якості та функціональності. Легка у встановленні, має велику кількість роз'ємів для розширення функціоналу комп'ютера. Рекомендую як надійний компонент для збірки потужного ПК.",
          inputImg: '',
          date: "01.02.2023",
          marginB: '52',
          reply: [
            {
              name: "Сергій",
              image: Sergiy,
              commentText: "Хоча функціональність материнської плати і вражає, але в процесі монтажу зіткнувся з проблемою - деякі роз'єми можуть бути зайняті при встановленні деяких великих компонентів, що ускладнює розширення функціоналу. Для мене це стало певним недоліком у використанні даної моделі",
              inputImg: '',
              date: "01.02.2023",
              marginB: '',
              reply: []
            },
            {
              name: "Павло",
              image: Pavlo,
              commentText: "Повністю підтверджую. Багато роз'ємів і портів дають можливість максимально розширити можливості комп'ютера. Рекомендую як найкращий вибір для створення потужного ПК!",
              inputImg: '',
              date: "01.02.2023",
              marginB: '',
              reply: []
            }
          ]
        },
      ]);


    // changable
      const handleAddReply = (text: string, parentComment: Comment) => {
        const formattedDate = new Date().toLocaleDateString('ru-RU').replace(/\./g, '.');
        const newReply: Comment = {
          name: session?.user?.name || "Степка",
          image: session?.user?.image || avatarIcon,
          commentText: text,
          inputImg: imageSrc,
          date: formattedDate,
          marginB: '52',
          reply: [],
        };
    
        const updatedComments = [...comments];
        parentComment.reply.unshift(newReply);
        setComments(updatedComments);
      };
      const handleAddRoot = (text: string) => {
        const formattedDate = new Date().toLocaleDateString('ru-RU').replace(/\./g, '.');
        const newReply: Comment = {
          name: session?.user?.name || "Степка",
          image: session?.user?.image || avatarIcon,
          commentText: text,
          inputImg: imageSrc,
          date: formattedDate,
          marginB: '',
          reply: [],
        };
    
        const updatedComments = [...comments];
        updatedComments.unshift(newReply);
        setComments(updatedComments);
        setTextComment('')
        setImageSrc('')
      };

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
      // const [ increaseSize, setIncreaseSize ] = useState(false)
      // <Image src={imageSrc} alt="test img" width={200} height={200} onClick={()=>setIncreaseSize(!increaseSize)}/>
    return (
        <>
            <div className="w-[59%]">
              <div className="flex flex-row justify-between gap-6 mb-[69px] items-end">
                <div className="relative w-full flex items-center">
                  <input id="uploadFile" type="file" className="hidden" accept="image/*, .png, .jpg, .gif, .web" onChange={e => handleRequestFile(e)}/>
                  <input type="text" placeholder="Написати відгук" className="w-full bg-transparent border-b-[1px] border-[#C1C1C1] pr-[25px]" onChange={e => setTextComment(e.target.value)} value={textComment}/>
                  <label htmlFor="uploadFile">
                    <Image src={clipGrey} alt="clipGrey" className="absolute top-[8%] right-0 hover:cursor-pointer"/>
                  </label>
                </div>
                <button className="flex items-center justify-center h-[36px] w-[105px] pt-[6px] pr-[14px] pb-[7px] pl-[14px]  bg-[#B9FF61] rounded-[30px] text-center" onClick={()=>handleAddRoot(textComment)}>Надіслати</button>
              </div>
              <CommentsList comments={comments} onAddReply={(text, parentComment) => handleAddReply(text, parentComment)} />
            </div>
        </>
    )
};
