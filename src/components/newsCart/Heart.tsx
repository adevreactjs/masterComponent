'use client';

import { useState } from 'react';
import Image from 'next/image';
export default function Heart({ favIcon, heartGreen }: { favIcon: string; heartGreen: string }) {
  const [liked, setLike] = useState(false);
  return (
    <>
      {liked ? (
        <Image
          className='absolute right-[30px] top-[26px] z-[1]'
          src={heartGreen}
          width={30}
          height={30}
          alt='img'
          onClick={() => setLike(false)}
        />
      ) : (
        <Image
          className='absolute right-[30px] top-[26px] z-[1]'
          src={favIcon}
          width={30}
          height={30}
          alt='img'
          onClick={() => setLike(true)}
        />
      )}
    </>
  );
}
