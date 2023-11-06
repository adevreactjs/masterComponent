import Link from "next/link";
import styles from './borderSpin.module.css'
export default function Circles({text, redirectionLink}:{text:string, redirectionLink:string}) {
    const sizingCircle = `
        min-[280px]:w-[18vw]
        min-[280px]:h-[18vw]
        min-[895px]:w-[8vw]
        min-[895px]:h-[8vw]
    `
    const sizingText = `
    min-[280px]:text-[2.6vw]
    min-[895px]:text-[1.2vw]
`
    return (
        <>
            <Link href={redirectionLink} target="_blank">
                <div className="relative hover:cursor-pointer">
                    <div className={` flex justify-center items-center absolute top-0 right-0 w-full h-full ${styles.animSpin}`}>
                        <div className="bg-[#262626] w-full h-full absolute z-[1] rounded-full"></div>
                        <div className="w-[102%] h-[102%] bg-gradient-to-t from-transparent to-[#B9FF61] absolute rounded-full"></div>
                    </div>
                    <div className={`${sizingCircle + sizingText} flex items-center justify-center bg-transparent relative z-[1]`}>
                        <p>{text}</p>
                    </div>
                </div>
            </Link>
        </>
    )
};
