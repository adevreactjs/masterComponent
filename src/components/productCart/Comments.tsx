import Image from "next/image";
import magnifier from '../../assets/productCard/comments/magnifier.svg'
import clip from '../../assets/productCard/comments/clip.svg'
export default function Comments() {
    const inputStyles = `
        w-full
        border-b-[0.15vw]
        bg-transparent
    `
    const buttonStyles = `
        bg-[#B9FF61]
        pl-5 pr-5 pt-1 pb-1
        rounded-3xl

        min-[280px]:text-[6px]
    `
    const responsiveBlockInput = `
        min-[280px]:w-[50px]
    `
    return (
        <>
            <div className="flex flex-row gap-10">
                <div className={`flex flex-row relative w-[715px] items-center ${responsiveBlockInput}`}>
                    <input type="text" className={inputStyles} placeholder="Написати відгук"/>
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
