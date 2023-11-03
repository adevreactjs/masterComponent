import FAQ from './components/ServerSide/FAQ';
import OurBenefits from './components/ServerSide/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  return (
    <main className='bg-[#FBFBFB]'>
<<<<<<< HEAD
      <NewsSlider title={'Новинки'} />
      <PopularRequests />
      <NewsSlider title={'Знижки'} width={450} discount={2244} fontSize={22} />
=======
      <NewsSlider title={'Новинки'} />
      <PopularRequests/>
      <NewsSlider title={'Знижки'} width={450} discount={2244} fontSize={22} />
      <OurBenefits />
      <FAQ />
>>>>>>> main
    </main>
  );
}
