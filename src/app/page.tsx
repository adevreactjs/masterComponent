import FAQ from '../components/accordion/FAQ';
import OurBenefits from '../components/benefitsCard/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  return (
    <main className='bg-[#FBFBFB]'>
      <NewsSlider title={'Новинки'} />
      <PopularRequests />
      <NewsSlider title={'Знижки'} width={450} discount={2244} fontSize={22} showMoreBtn={true}/>
      <OurBenefits />
      <FAQ />
    </main>
  );
}
