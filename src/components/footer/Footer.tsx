import Circles from './Circles';
import RegistrationBtn from './RegistrationBtn';
export default function Footer() {
  const headerFooter = `
    min-[280px]:text-[23px]
    min-[320px]:text-[25px]


    min-[548px]:text-[30px]
    min-[800px]:text-[35px]
    min-[1050px]:text-[46px]
    `;
  return (
    <div className=' bg-[#262626] text-[#FBFBFB] flex flex-col w-full rounded-t-3xl pl-[5vw] pr-[3vw] pt-[8vw] pb-[4vw] h-auto min-[1120px]:pt-[2vw]'>
      <div className='min-[550px]:flex flex-row justify-between'>
        <div className='flex items-start leading-[36px] min-[320px]:w-[320px] min-[548px]:w-[340px] min-[800px]:w-[400px] min-[1050px]:w-[500px]'>
          <h2 className={`text-[58px] ${headerFooter}`}>Підпишись та отримай знижку</h2>
        </div>
        <div className='flex flex-col items-center justify-center min-[280px]:items-start min-[1200px]:items-end'>
          <p className='pl-[3vw] pr-[3vw] border text-center rounded-3xl inline-block mt-[6vw] min-[550px]:mt-0 min-[280px]:text-[3vw] min-[550px]:text-[2.3vw] min-[700px]:pl-[1vw] min-[700px]:pr-[1vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw] min-[1400px]:rounded-[20px] min-[1700px]:rounded-[30px]'>
            info@mastercomponent.net
          </p>
          <div className='mt-[3vw] min-[550px]:mt-[1vw]'>
            <p className='text-[3.5vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw]'>
              +38 (063) 277-53-59
            </p>
            <p className='text-[3.5vw] min-[700px]:text-[2vw] min-[1200px]:text-[1.5vw] '>
              +38 (067) 277-53-59
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full min-[280px]:mt-[65px] min-[895px]:mb-[65px]'>
        <RegistrationBtn />
      </div>

      <div className='min-[895px]:hidden min-[280px]:block'>
        <div className='flex flex-row justify-around text-[3.5vw] min-[280px]:mb-[80px] min-[280px]:mt-[88px] min-[1499px]:text-[27px]'>
          <Circles text='Ми у Києві' redirectionLink='https://maps.app.goo.gl/zP364ukyc7L1FMvE6' />
          <Circles text='Ми у Львові' redirectionLink='https://maps.app.goo.gl/uQMnoJ1caqhsSPQ96' />
          <Circles
            text='Ми у Харкові'
            redirectionLink='https://maps.app.goo.gl/TWACtTTQXEMmGsGY7'
          />
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-[2vw] text-[#C1C1C1]'>© mastercomponent 2023</p>
          <p className='text-[2vw] text-[#C1C1C1]'>Privacy Policy</p>
        </div>
      </div>

      <div className='min-[280px]:hidden min-[895px]:flex flex-row items-center justify-between'>
        <p className='text-[1vw] text-[#C1C1C1]'>© mastercomponent 2023</p>
        <div className='flex flex-row justify-around text-[20px] gap-[10vw]'>
          <Circles text='Ми у Києві' redirectionLink='https://maps.app.goo.gl/zP364ukyc7L1FMvE6' />
          <Circles text='Ми у Львові' redirectionLink='https://maps.app.goo.gl/uQMnoJ1caqhsSPQ96' />
          <Circles
            text='Ми у Харкові'
            redirectionLink='https://maps.app.goo.gl/TWACtTTQXEMmGsGY7'
          />
        </div>
        <p className='text-[1vw] text-[#C1C1C1]'>Privacy Policy</p>
      </div>
    </div>
  );
}
