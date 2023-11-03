import FAQ from './components/ServerSide/FAQ';
import OurBenefits from './components/ServerSide/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  return (
    <main className='bg-[#FBFBFB]'>
      <NewsSlider />
      <PopularRequests/>
      <OurBenefits />
      <FAQ />
    </main>
  );
}
