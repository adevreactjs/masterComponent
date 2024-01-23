'use client';
import { useEffect, useState } from 'react';
import FAQ from '../components/faq/FAQ';
import OurBenefits from '../components/ourBenefits/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';

export default function Home() {
  const [currentWidth, setCurrentWidth] = useState(450);
  const [currentFont, setCurrentFont] = useState(22);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setCurrentWidth(328);
        setCurrentFont(18);
      } else {
        setCurrentWidth(450);
        setCurrentFont(22);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentWidth, currentFont]);

  return (
    <main>
      <NewsSlider title={'Новинки'} showDots={true} />
      <PopularRequests />
      <NewsSlider
        title={'Знижки'}
        width={currentWidth}
        discount={2244}
        showMoreBtn={true}
        fontSize={currentFont}
      />
      <OurBenefits />
      <FAQ />
    </main>
  );
}
