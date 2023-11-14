'use client';
import { useEffect, useState } from 'react';
import FAQ from '../components/faq/FAQ';
import OurBenefits from '../components/ourBenefits/OurBenefits';
import NewsSlider from '@/components/newSlider/NewsSlider';
import PopularRequests from '@/components/popularRequests/PopularRequests';
import RegistrationForm from '@/components/registrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import ProductCart from '@/components/productCart/ProductCart';

export default function Home() {
  const [currentWidth, setCurrentWidth] = useState(450);
  const [currentFont, setCurrentFont] = useState(22);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);

  const isOpenRegistrationForm = useSelector(
    (state: RootState) => state.registration.isOpenRegistrationForm,
  );

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
      {/* <ProductCart/> */}
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
      {isOpenRegistrationForm && <RegistrationForm />}
    </main>
  );
}
