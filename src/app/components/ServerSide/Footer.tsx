import Link from "next/link";

export default function Footer() {
    return(
        <div className="bg-[#262626] text-[#FBFBFB] w-full rounded-t-3xl pl-[5vw] pr-[3vw] pt-[8vw] min-[550px]:h-[650px] min-[665px]:h-[95vw] min-[895px]:h-[62vw] min-[1120px]:h-[52vw] min-[1120px]:pt-[2vw] min-[1400px]:h-[47vw]">
            <div className="min-[550px]:flex flex-row justify-between">
                <h2 className="text-[9vw] leading-tight min-[550px]:text-[3vw] min-[550px]:w-[25vw]">Підпишись та отримай знижку</h2>
                <div className="flex flex-col items-center justify-center mb-[8vw]">
                    <p className=" border text-center rounded-3xl inline-block  mt-[6vw] text-[4vw] w-[229px] min-[550px]:mt-0 min-[550px]:text-[17px] min-[1499px]:w-[305px] min-[1499px]:text-[23px]">info@mastercomponent.net</p>
                    <div className="mt-[3vw] min-[550px]:mt-[1vw]">
                        <p className="text-[5.5vw] min-[550px]:text-[25px]">+38 (063) 277-53-59</p>
                        <p className="text-[5.5vw] min-[550px]:text-[25px]">+38 (067) 277-53-59</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-[3vw]">
                <input type="email" placeholder="Email" className="bg-transparent border-b border-[#FBFBFB] w-[58vw] placeholder:text-[5vw] min-[650px]:placeholder:text-[25px] min-[650px]:focus:text-[25px] focus:text-[5vw] focus:text-[#B9F072]"/>
                <button className="pl-[15px] pr-[15px] pt-[1px] pb-[1px] rounded-2xl bg-[#B9F072] font-[500] text-[#262626] text-[5vw] min-[550px]:text-[2.4vw] min-[280px]:before:content-['Надіслати'] min-[750px]:before:content-['Зареєструватися']"></button>
            </div>

            <div className="min-[895px]:hidden min-[280px]:block">
                <div className="flex flex-row justify-around text-[4vw] mt-[20vw] mb-[20vw] min-[1499px]:text-[27px]">
                    <Link href='/' className="bg-transparent ">Ми в Києві</Link>
                    <Link href='/' className="bg-transparent ">Ми у Львові</Link>
                    <Link href='/' className="bg-transparent ">Ми у Харкові</Link>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-[5vw] text-[#C1C1C1]">© mastercomponent 2023</p>
                    <p className="text-[5vw] text-[#C1C1C1]">Privacy Policy</p>
                </div>
            </div>

            <div className="min-[280px]:hidden min-[895px]:flex flex-row items-center justify-between mt-[20vw]">
                <p className="text-[15px] text-[#C1C1C1]">© mastercomponent 2023</p>
                <div className="flex flex-row justify-around text-[20px] gap-[20px] min-[1000px]:gap-[70px] min-[895px]:text-[2.5vw]">
                    <Link href='/' className="bg-transparent">Ми в Києві</Link>
                    <Link href='/' className="bg-transparent">Ми у Львові</Link>
                    <Link href='/' className="bg-transparent">Ми у Харкові</Link>
                </div>
                <p className="text-[15px] text-[#C1C1C1]">Privacy Policy</p>
            </div>
        </div>
    )
};
