import Image from "next/image";
import magnifier from '../../assets/productCard/comments/magnifier.svg'
import clip from '../../assets/productCard/comments/clip.svg'
import pictureGrey from '../../assets/productCard/comments/PictureGrey.svg'
import clipGrey from '../../assets/productCard/comments/clipGrey.svg'

import { useSession } from "next-auth/react";
export default function Comments() {
    const inputStyles = `
        w-full
        border-b-[0.15vw]
        bg-transparent

        min-[280px]:text-[4.1vw]
    `
    const buttonStyles = `
        bg-[#B9FF61]
        pl-5 pr-5 pt-1 pb-1
        rounded-3xl

        min-[280px]:text-[4.1vw]
    `
    const responsiveBlockInput = `
        min-[280px]:w-[750px]
    `
    const { data: session } = useSession()
    return (
        <>
            <div className="w-full border border-[#C1C1C1] rounded-3xl overflow-hidden">
                <div className="bg-[#F1F1F1] h-[25px] flex flex-row items-center pl-5 pr-5 justify-between">
                    <div className="flex flex-row items-center">
                        <div className="bg-black w-8 h-8 rounded-full">{session?.user?.image}</div>
                        <p className="text-[4vw] ml-2">Default_name{session?.user?.name}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src={pictureGrey} alt="picture" className="w-5 mr-[10px]"/>
                        <Image src={clipGrey} alt="clip" className="w-5"/>
                    </div>
                </div>
                <textarea name="comment" rows={5} className="w-full pl-[2vw] pr-[2vw] font-light placeholder:font-light placeholder:text-[14px] text-[14px] text-[#262626]" placeholder="Ваш відгук"></textarea>
            </div>

            <div className={`flex flex-row gap-10 ${responsiveBlockInput}`}>
                <div className={`flex flex-row relative items-center `}>
                    <input name="comment" type="text" className={inputStyles} placeholder="Написати відгук"/>
                    <div className="absolute flex flex-row right-1 gap-5">
                        <Image src={magnifier} alt="magnifier" className="w-[10px]"/>
                        <Image src={clip} alt="clip" className="w-[10px]"/>
                    </div>
                </div>
                <button className={buttonStyles}><span>Надіслати</span></button>
            </div>
        </>
    )
};
