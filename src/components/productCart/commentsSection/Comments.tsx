'use client'

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import magnifier from '../../../assets/productCard/comments/magnifier.svg';
import clip from '../../../assets/productCard/comments/clip.svg';
import pictureGrey from '../../../assets/productCard/comments/pictureGrey.svg';
import clipGrey from '../../../assets/productCard/comments/clipGrey.svg';
import * as c from './styles'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Vitaliy from '../../../assets/productCard/comments/Vitaliy.png'
import Roman from '../../../assets/productCard/comments/Roman.png'
import Yulia from '../../../assets/productCard/comments/Yulia.png'
import Pavlo from '../../../assets/productCard/comments/Pavlo.png'
import Sergiy from '../../../assets/productCard/comments/Sergiy.png'
import CommentsConstruction from './CommentsConstruction';
import AnswerConstr from './AnswerConstr';
import avatarIcon from '@/assets/avatar.svg';
export default function Comments() {
    //massive of all comments-tree, id = уровень вложености
    const allComentators = [
      {
        id: 1,
        image: Vitaliy,
        name: "Віталій",
        comment: "Задоволений роботою. Швидкість передачі даних інтегрованого Wi-Fi вражає, а підтримка новітніх процесорів дозволяє максимально використовувати їх потужність.",
        date: "01.02.2023",
        amountComments: "1",
        marginRight: 0,
        users: [{
          id: 2,
          image: Roman,
          name: "Роман",
          comment: "На жаль, виявив проблеми з інтегрованим Wi-Fi на материнській платі. Швидкість передачі даних не відповідає заявленим характеристикам, що призвело до нестабільного з'єднання.",
          date: "01.02.2023",
          amountComments: "",
          marginRight: 20,
        }]
      },
      {
        id: 1,
        image: Yulia,
        name: "Юлія",
        comment: "Ідеальне поєднання якості та функціональності. Легка у встановленні, має велику кількість роз'ємів для розширення функціоналу комп'ютера. Рекомендую як надійний компонент для збірки потужного ПК.",
        date: "01.02.2023",
        amountComments: "2",
        marginRight: 0,
        users:[
          {
            id: 2,
            image: Sergiy,
            name: "Сергій",
            comment: "Хоча функціональність материнської плати і вражає, але в процесі монтажу зіткнувся з проблемою - деякі роз'єми можуть бути зайняті при встановленні деяких великих компонентів, що ускладнює розширення функціоналу. Для мене це стало певним недоліком у використанні даної моделі",
            date: "01.02.2023",
            amountComments: "0",
            marginRight: 20,
          },
          {
            id: 2,
            image: Pavlo,
            name: "Павло",
            comment: "Повністю підтверджую. Багато роз'ємів і портів дають можливість максимально розширити можливості комп'ютера. Рекомендую як найкращий вибір для створення потужного ПК!",
            date: "01.02.2023",
            amountComments: "0",
            marginRight: 20,
          }
        ]
      },
    ]
    // END
    const [ comments, setComments ] = useState(allComentators)
  // states and functions
  interface textAndDate {
    text: string,
    date: string
  }
  interface commentUser {
    id: number;
    image: StaticImageData;
    name: string;
    comment: string;
    date: string;
    amountComments: string;
    marginRight: number;
  }
  interface commentObj {
    id: number;
    name: string;
    image: StaticImageData;
    comment: string;
    date: string;
    amountComments: string;
    marginRight: number;
    users : commentUser[];
  }
  const { data: session } = useSession();
  const [inputText, setInputText] = useState('')
  function sendParent(inputText:string) {
    if(inputText != '') {
      const today = new Date()
      const date = today.toLocaleDateString('en-US').replace(/\//g, '.')

      const dataText:textAndDate = {
        text: inputText,
        date: date
      }
      //data - done, text - done, image - ?, id - ?, name - ?
      const newParentObject = {
        id: 1,
        image: session?.user?.image || avatarIcon,
        name: session?.user?.name || "Степка",
        comment: dataText.text,
        date: dataText.date,
        amountComments: '',
        marginRight: 0,
        users: []
      }
      setComments( prev => [newParentObject, ...prev])
    }
    setInputText('')
  }
  // END


  function renderComments(comments:commentObj[]) {
    return(
      <>
        {comments.map( (item, index) => (
          <>
            <AnswerConstr item={item} index={index}/>
            {item.users && <CommentsConstruction item={item.users}/>}
          </>
        ))}
      </>
    )
  }
  return (
    <>
      <div className='w-full border border-[#C1C1C1] rounded-3xl overflow-hidden min-[500px]:hidden'>
        <div className='bg-[#F1F1F1] h-[25px] flex flex-row items-center pl-5 pr-5 justify-between min-[320px]:h-[35px]'>
          <div className='flex flex-row items-center'>
            <div className='bg-black w-8 h-8 rounded-full'>{session?.user?.image}</div>
            <p className='text-[4vw] ml-2'>Default_name{session?.user?.name}</p>
          </div>
          <div className='flex flex-row items-center'>
            <Image src={pictureGrey} alt='picture' className='w-5 mr-[10px] min-[330px]:w-7' />
            <Image src={clipGrey} alt='clip' className='w-5 min-[330px]:w-7' />
          </div>
        </div>
        <textarea name='comment' className={c.textareaStyles} placeholder='Ваш відгук'></textarea>
      </div>

      <div className={c.responsiveBlockInput}>
        <div className="flex flex-row relative items-center w-full">
          <input name='comment' type='text' className={c.inputStyles} placeholder='Написати відгук' value={inputText} onChange={(e) => setInputText( e.target.value )}/>
          <div className='absolute flex flex-row right-1 gap-5'>
            <Image src={magnifier} alt='magnifier' className='w-[18px]' />
            <Image src={clip} alt='clip' className='w-[18px]' />
          </div>
        </div>
        <button className={c.buttonStyles} onClick={() => sendParent(inputText)}>
            <span>Надіслати</span>
        </button>
      </div>
      
      {renderComments(comments)}

    </>
  );
}
