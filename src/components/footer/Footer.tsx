import Link from "next/link";
import styles from './borderSpin.module.css'
import Circles from "./Circles";
export default function Footer() {
    return(
        <div className="bg-[#262626] text-[#FBFBFB] w-full rounded-t-3xl pl-[5vw] pr-[3vw] pt-[8vw] pb-[4vw]  min-[550px]:h-[101vw]  min-[895px]:h-[62vw] min-[1120px]:h-[58vw] min-[1200px]:h-[55vw] min-[1120px]:pt-[2vw]">
            <div className="min-[550px]:flex flex-row justify-between">
                <h2 className="text-[8vw] leading-tight tracking-[0.1vw] min-[280px]:w-[90vw] min-[550px]:text-[4.5vw] min-[550px]:w-[37vw]">Підпишись та отримай знижку</h2>
                <div className="flex flex-col items-center justify-center mb-[8vw] min-[280px]:items-start min-[1200px]:items-end">
                    <p className="pl-[3vw] pr-[3vw] border text-center rounded-3xl inline-block mt-[6vw] min-[550px]:mt-0 min-[280px]:text-[3vw] min-[550px]:text-[2.3vw] min-[700px]:pl-[1vw] min-[700px]:pr-[1vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw] min-[1400px]:rounded-[20px] min-[1700px]:rounded-[30px]">info@mastercomponent.net</p>
                    <div className="mt-[3vw] min-[550px]:mt-[1vw]">
                        <p className="text-[3.5vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw]">+38 (063) 277-53-59</p>
                        <p className="text-[3.5vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw] ">+38 (067) 277-53-59</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-end gap-[3vw] min-[500px]:gap-[1vw] min-[1200px]:mt-[7vw]">
                <input type="email" placeholder="Email" className="min-[280px]:h-[12vw] min-[550px]:h-[5vw] bg-transparent border-b border-[#FBFBFB] text-[3.4vw] w-[58vw] placeholder:text-[3vw] focus:text-[3.5vw] focus:text-[#B9F072] min-[1200px]:w-[70vw]"/>
                <button className="pl-[10px] pr-[10px] rounded-[3vw] bg-[#B9F072] font-[500] text-[#262626] text-[4vw] h-[8vw] min-[550px]:text-[3vw] min-[500px]:text-[3vw] min-[965px]:h-[6.5vw] min-[1200px]:h-[5vw] min-[1200px]:text-[2vw] min-[280px]:before:content-['Надіслати'] min-[400px]:before:content-['Зареєструватися']"></button>
            </div>

            <div className="min-[895px]:hidden min-[280px]:block">
                <div className="flex flex-row justify-around text-[3.5vw] mt-[20vw] mb-[20vw] min-[1499px]:text-[27px]">
                    <Circles text='Ми у Києві' redirectionLink='https://maps.app.goo.gl/zP364ukyc7L1FMvE6'/>
                    <Circles text='Ми у Львові' redirectionLink='https://maps.app.goo.gl/uQMnoJ1caqhsSPQ96'/>
                    <Circles text='Ми у Харкові' redirectionLink='https://maps.app.goo.gl/TWACtTTQXEMmGsGY7'/>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-[2vw] text-[#C1C1C1]">© mastercomponent 2023</p>
                    <p className="text-[2vw] text-[#C1C1C1]">Privacy Policy</p>
                </div>
            </div>

            <div className="min-[280px]:hidden min-[895px]:flex flex-row items-center justify-between mt-[15vw] min-[1200px]:mt-[13vw]">
                <p className="text-[1vw] text-[#C1C1C1]">© mastercomponent 2023</p>
                <div className="flex flex-row justify-around text-[20px] gap-[10vw]">
                    <Circles text='Ми у Києві' redirectionLink='https://maps.app.goo.gl/zP364ukyc7L1FMvE6'/>
                    <Circles text='Ми у Львові' redirectionLink='https://maps.app.goo.gl/uQMnoJ1caqhsSPQ96'/>
                    <Circles text='Ми у Харкові' redirectionLink='https://maps.app.goo.gl/TWACtTTQXEMmGsGY7'/>
                </div>
                <p className="text-[1vw] text-[#C1C1C1]">Privacy Policy</p>
            </div>
        </div>
    )
};
