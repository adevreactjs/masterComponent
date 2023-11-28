'use client'
import Image from 'next/image';
import magnifier from '../../../assets/productCard/comments/magnifier.svg';
import clip from '../../../assets/productCard/comments/clip.svg';
import pictureGrey from '../../../assets/productCard/comments/pictureGrey.svg';
import clipGrey from '../../../assets/productCard/comments/clipGrey.svg';
import starGold from '../../../assets/productCard/comments/Star 1.svg'
import commentIcon from '../../../assets/comment.svg'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
export default function CommentsInput() {
  interface textAndDate {
    text: string,
    date: string
  }
  const inputStyles = `
  w-full
  border-b-[0.15vw]
  border-[#C1C1C1]
  bg-transparent
  placeholder:text-[#C1C1C1]
  `;
  const buttonStyles = `
  bg-[#B9FF61]
  h-[36px]
  pl-[15px] pr-[15px]
  rounded-[30px]
  text-[16px]
  min-[500px]:
  min-[546px]:
  `;
  const responsiveBlockInput = `
    max-[500px]:hidden
    min-[500px]:flex
    min-[500px]:w-full
    min-[750px]:w-[685px]
  `;
  const textareaStyles = `
    w-full
    h-full
    bg-transparent
    pl-[2vw] pr-[2vw] pt-3
    font-light
    placeholder:font-light placeholder:text-[14px]
    text-[14px] text-[#262626]
    min-[320px]:h-[75px]
  `;
  const comentsBlockStyles = `
  min-[500px]:w-full
  min-[750px]:w-[685px]
  `
  const { data: session } = useSession();
  const [inputText, setInputText] = useState('')
  const computerInput = (
    <div className={`flex flex-row gap-10 items-end ${responsiveBlockInput}`}>
      <div className="flex flex-row relative items-center w-full">
        <input name='comment' type='text' className={inputStyles} placeholder='Написати відгук' value={inputText} onChange={(e) => setInputText( e.target.value )}/>
        <div className='absolute flex flex-row right-1 gap-5'>
          <Image src={magnifier} alt='magnifier' className='w-[18px]' />
          <Image src={clip} alt='clip' className='w-[18px]' />
        </div>
      </div>
      <button className={buttonStyles} onClick={() => sendToMassive(inputText)}>
          <span>Надіслати</span>
      </button>
    </div>
  )
  const phoneInput =( 
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
      <textarea name='comment' className={textareaStyles} placeholder='Ваш відгук'></textarea>
    </div>
  )
  const [ masText, setText ] = useState<textAndDate[]>([])
  const [ numAnswers, setNumAnswers ] = useState(1)
  const [ showInput, setShowInput ] = useState(false)
  function sendToMassive(inputText:string) {
    if(inputText != '') {
      const today = new Date()
      const date = today.toLocaleDateString('en-US').replace(/\//g, '.')

      const dataText:textAndDate = {
        text: inputText,
        date: date
      }
      setText( prev => [...prev, dataText] )
      setText( prev => {
        return prev.filter( item => item.text !== '' )
      })
      console.log(masText)
    }
    setInputText('')
    setShowInput(false)
  }

  return (
    <>
      {phoneInput}

      {computerInput}
      {
        masText.map( (item, id) => (
        <div key={id} className={`border-b flex flex-col mt-[69px] ${comentsBlockStyles}`}>
          <div className='flex justify-between items-center'>
            <div className="flex flex-row items-center">
              <div className='w-9 h-9 bg-black rounded-full mr-[9px]'></div>
              <p>{session?.user?.name || 'Default'}</p>
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
            {item.text}
          </div>
          <div className='mt-6 flex flex-row text-[#6C6C6C] justify-between'>
            <div>{item.date}</div>
            <div className="flex flex-row gap-[35px]">
              <div className='flex flex-row items-center'>
                <Image src={commentIcon} alt="Comment Icon" className='mr-2'/>
                <p className='hover:cursor-default'>Коментарі{numAnswers > 0 ? ':'+numAnswers : ''}</p>
              </div>
              <span className='hover:cursor-pointer' onClick={()=>setShowInput(true)}>Відповісти</span>
            </div>
          </div>
          {showInput && computerInput}
          {showInput && phoneInput}
        </div>
        ))
      }

    </>
  );
}
