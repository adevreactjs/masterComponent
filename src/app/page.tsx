import FAQ from '../components/faq/FAQ';
import OurBenefits from '../components/ourBenefits/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  return (
    <main>
      <NewsSlider title={'Новинки'} showDots={true} />
      <PopularRequests />
      <NewsSlider title={'Знижки'} discount={2244} showMoreBtn={true} />
      <OurBenefits />
      <FAQ />
    </main>
  );
}
