import { StaticImageData } from 'next/image';
import Image from 'next/image';
import starGold from '../../../assets/productCard/comments/Star 1.svg';
import commentIcon from '../../../assets/comment.svg';
import { useSession } from 'next-auth/react';
import * as c from './styles';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useState } from 'react';
import clip from '../../../assets/productCard/comments/clip.svg';
import clipGrey from '../../../assets/productCard/comments/clipGrey.svg';
import { addObject } from '../../../app/store/reducers/AnswerParentSlice';
import { useDispatch } from 'react-redux';
import avatarIcon from '@/assets/avatar.svg';
interface commentUser {
  id: number;
  image: StaticImageData;
  name: string;
  comment: string;
  date: string;
  marginRight: number;
}
interface commentObj {
  id: number;
  name: string;
  image: StaticImageData;
  comment: string;
  date: string;
  marginRight: number;
  users: commentUser[];
}
interface textAndDate {
  text: string;
  date: string;
}
export default function AnswerConstr({
  index,
  item,
  amountComments,
}: {
  index: number;
  item: commentUser;
  amountComments: number;
}) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [idInput, setIdInput] = useState(-1);
  const [inputText, setInputText] = useState('');
  function closeInput() {
    setIdInput(-1);
  }
  const ref = useDetectClickOutside({ onTriggered: closeInput });

  function sendObject(inputText: string) {
    if (inputText != '') {
      const today = new Date();
      const date = today.toLocaleDateString('en-US').replace(/\//g, '.');

      const dataText: textAndDate = {
        text: inputText,
        date: date,
      };
      //data - done, text - done, image - ?, id - ?, name - ?
      const newParentObject: commentObj = {
        id: index + 1,
        image: session?.user?.image || avatarIcon,
        name: session?.user?.name || 'Степка',
        comment: dataText.text,
        date: dataText.date,
        marginRight: 0,
        users: [],
      };
      dispatch(addObject(newParentObject));
    }
    setInputText('');
  }
  return (
    <>
      <div key={index}>
        <div className={`${c.comentsBlockStyles}`}>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row items-center'>
              <Image src={item.image} alt='logo_user' />
              <p>{session?.user?.name || item.name}</p>
            </div>
            <div className='flex flex-row gap-2'>
              <Image src={starGold} alt='GoldStar' />
              <Image src={starGold} alt='GoldStar' />
              <Image src={starGold} alt='GoldStar' />
              <Image src={starGold} alt='GoldStar' />
              <Image src={starGold} alt='GoldStar' />
            </div>
          </div>
          <div className='mt-2 leading-[23px]'>{item.comment}</div>
          <div className='mt-6 flex flex-row text-[#6C6C6C] justify-between'>
            <div>{item.date}</div>
            <div className='flex flex-row gap-[35px]'>
              <div className='flex flex-row items-center'>
                <Image src={commentIcon} alt='Comment Icon' className='mr-2' />
                <p className='hover:cursor-default'>
                  Коментарі{amountComments !== 0 ? amountComments : ''}
                </p>
              </div>
              <span className='hover:cursor-pointer' onClick={() => setIdInput(index)}>
                Відповісти
              </span>
            </div>
          </div>
        </div>
        {idInput === index && (
          <>
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
              <textarea
                name='comment'
                className={c.textareaStyles}
                placeholder='Ваш відгук'></textarea>
            </div>

            <div className={c.responsiveBlockInput} ref={ref}>
              <div className='flex flex-row relative items-center w-full'>
                <input
                  name='comment'
                  type='text'
                  className={c.inputStyles}
                  placeholder='Написати відгук'
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                />
                <div className='absolute flex flex-row right-1'>
                  <Image src={clip} alt='clip' className='w-[18px]' />
                </div>
              </div>
              <button className={c.buttonStyles} onClick={() => sendObject(inputText)}>
                <span>Надіслати</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}