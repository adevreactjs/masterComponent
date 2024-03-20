'use client'
import favIcon from '../../assets/favIcon.svg';
import heartGreen from '../../assets/heartGreen.svg'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'
import { addFavoriteGoods } from '@/app/store/reducers/GoodsCardsSlice';

export default function Heart({id}: {id: number}) {
    const favoriteGoods = useSelector((state: any) => state.GoodsCards.favoriteGoodsIds)
    // const [liked, setLike] = useState(favoriteGoods.includes(id))
    const dispatch = useDispatch()

    const handleClick = () => {
        // setLike(!liked)
        dispatch(addFavoriteGoods(id))
    }

    // console.log('favoriteGoods', favoriteGoods, favoriteGoods.includes(id), id);
    

    return(
        <>
            <button>
                <Image className="absolute right-[30px] top-[26px] z-[1]" src={favoriteGoods.includes(id) ? heartGreen : favIcon} width={30} height={30} alt='img' onClick={handleClick} />
            </button>
                    
        </>
    )
};