import Image from 'next/image';
import magnifier from '../../assets/productCard/comments/magnifier.svg';
import clip from '../../assets/productCard/comments/clip.svg';
import pictureGrey from '../../assets/productCard/comments/pictureGrey.svg';
import clipGrey from '../../assets/productCard/comments/clipGrey.svg';

import { useSession } from 'next-auth/react';
export default function Comments() {
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
  const { data: session } = useSession();
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
        <textarea name='comment' className={textareaStyles} placeholder='Ваш відгук'></textarea>
      </div>

      <div className={`flex flex-row gap-10 items-end ${responsiveBlockInput}`}>
        <div className={`flex flex-row relative items-center w-full`}>
          <input name='comment' type='text' className={inputStyles} placeholder='Написати відгук' />
          <div className='absolute flex flex-row right-1 gap-5'>
            <Image src={magnifier} alt='magnifier' className='w-[18px]' />
            <Image src={clip} alt='clip' className='w-[18px]' />
          </div>
        </div>
        <button className={buttonStyles}>
          <span>Надіслати</span>
        </button>
      </div>
    </>
  );
}
