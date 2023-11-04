import FAQ from '../components/faq/FAQ';
import OurBenefits from '../components/ourBenefits/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  return (
    <main>
      <NewsSlider title={'Новинки'} />
      <PopularRequests />
      <NewsSlider title={'Знижки'} width={450} discount={2244} fontSize={22} showMoreBtn={true}/>
      <OurBenefits />
      <FAQ />
    </main>
  );
}
