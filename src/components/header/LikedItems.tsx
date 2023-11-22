'use client'
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
export default function LikedItems() {
    const items = useSelector( (state:RootState) =>  state.pushItem.id)
    return(
        <div className="border max-w-[600px] h-max-[200px] flex flex-wrap">
            {items.map((item, id) => <div key={id}>{item}</div>)}
        </div>
    )
};
