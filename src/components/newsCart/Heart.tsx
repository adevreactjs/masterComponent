'use client'
import Image from 'next/image'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {pushID, deleteID} from '../../app/store/reducers/LikedCardsSlice'

export default function Heart({favIcon, heartGreen, id}:{favIcon:string, heartGreen:string, id: number}) {
    const [liked, setLike] = useState(false)
    const dispatch = useDispatch()
    function pushId(id:number) {
        setLike(true)
        dispatch(pushID(id))
    }
    function deleteId(id:number) {
        setLike(false)
        dispatch(deleteID(id))
    }
    return(
        <>
            {liked ? 
                (<Image className="absolute right-[30px] top-[26px] z-[1]" src={heartGreen} width={30} height={30} alt='img' onClick={() => deleteId(id)}/>) 
                : 
                (<Image className="absolute right-[30px] top-[26px] z-[1]" src={favIcon} width={30} height={30} alt='img' onClick={() => pushId(id)}/>)
            }
        </>
    )
};