'use client'
import { StaticImageData } from "next/image";
import Image from 'next/image'
import starGold from '../../../assets/productCard/comments/Star 1.svg'
import commentIcon from '../../../assets/comment.svg'
import { useSession } from 'next-auth/react';
import * as c from './styles'
import { useState } from "react";
import clip from '../../../assets/productCard/comments/clip.svg';
import clipGrey from '../../../assets/productCard/comments/clipGrey.svg';
import { useDetectClickOutside } from 'react-detect-click-outside';

interface commentUser {
        id: number;
        image: StaticImageData;
        name: string;
        comment: string;
        date: string;
        amountComments: string;
        marginRight: number;
      }
export default function CommentsConstruction({item}:{item:commentUser[]}) {
    const { data: session } = useSession();
    const [ idInput, setIdInput ] = useState(-1)
    const [inputText, setInputText] = useState('')
    function closeInput() { setIdInput(-1) }
    const ref = useDetectClickOutside({ onTriggered: closeInput })
    return(
        <>
        {item.map( (item, index) => (
            <div key={index}>
            <div className={`ml-[20px] ${c.comentsBlockStyles}`}>
              <div className='flex justify-between items-center'>
                <div className="flex flex-row items-center">
                  <Image src={item.image} alt="logo_user"/>
                  <p>{session?.user?.name || item.name}</p>
                </div>
                <div className='flex flex-row gap-2'>
                  <Image src={starGold} alt="GoldStar"/>
                  <Image src={starGold} alt="GoldStar"/>
                  <Image src={starGold} alt="GoldStar"/>
                  <Image src={starGold} alt="GoldStar"/>
                  <Image src={starGold} alt="GoldStar"/>
                </div>
              </div>
              <div className='mt-2 leading-[23px]'>
                {item.comment}
              </div>
              <div className='mt-6 flex flex-row text-[#6C6C6C] justify-between'>
                <div>{item.date}</div>
                <div className="flex flex-row gap-[35px]">
                  <div className='flex flex-row items-center'>
                    <Image src={commentIcon} alt="Comment Icon" className='mr-2'/>
                    <p className='hover:cursor-default'>Коментарі{item.amountComments}</p>
                  </div>
                  <span className='hover:cursor-pointer' onClick={()=>setIdInput(index)}>Відповісти</span>
                </div>
              </div>
            </div>
            {idInput === index && <>
                    <div className='w-full border border-[#C1C1C1] rounded-3xl overflow-hidden min-[500px]:hidden'>
                    <div className='bg-[#F1F1F1] h-[25px] flex flex-row items-center pl-5 pr-5 justify-between min-[320px]:h-[35px]'>
                      <div className='flex flex-row items-center'>
                        <div className='bg-black w-8 h-8 rounded-full'>{session?.user?.image}</div>
                        <p className='text-[4vw] ml-2'>Default_name{session?.user?.name}</p>
                      </div>
                      <div className='flex flex-row items-center'>
                        <Image src={clipGrey} alt='clip' className='w-5 min-[330px]:w-7' />
                      </div>
                    </div>
                    <textarea name='comment' className={c.textareaStyles} placeholder='Ваш відгук'></textarea>
                  </div>
            
                  <div className={c.responsiveBlockInput} ref={ref}>
                    <div className="flex flex-row relative items-center w-full">
                      <input name='comment' type='text' className={c.inputStyles} placeholder='Написати відгук' value={inputText} onChange={(e) => setInputText( e.target.value )}/>
                      <div className='absolute flex flex-row right-1'>
                        <Image src={clip} alt='clip' className='w-[18px]' />
                      </div>
                    </div>
                    <button className={c.buttonStyles}>
                        <span>Надіслати</span>
                    </button>
                  </div></>
            }
          </div>
        ) )}
            
        </>
    )
};
