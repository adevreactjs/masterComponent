import Image from 'next/image';
import Accordion from './components/ServerSide/Accordion';
import FAQ from './components/ServerSide/FAQ';
import OurBenefits from './components/ServerSide/OurBenefits';

export default function Home() {
  return (
    <main className='bg-[#FBFBFB]'>
      <OurBenefits />
      <FAQ />
    </main>
  );
}
