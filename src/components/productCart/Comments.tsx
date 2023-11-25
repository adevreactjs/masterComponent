import Image from "next/image";
import magnifier from '../../assets/productCard/comments/magnifier.svg'
import clip from '../../assets/productCard/comments/clip.svg'
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
            <div className="w-full border rounded-3xl overflow-hidden">
                <div className="bg-[#C1C1C1] h-[25px]">
                    <p>Hi {session?.user?.name}</p>
                </div>
                <textarea name="comment" className="w-full pl-[2vw] pr-[2vw]" placeholder="Ваш відгук"></textarea>
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
