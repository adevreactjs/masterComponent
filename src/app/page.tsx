import Image from 'next/image';
import Accordion from './components/ServerSide/Accordion';
import FAQ from './components/ServerSide/FAQ';

export default function Home() {
  return (
    <main className='bg-[#FBFBFB]'>
      <FAQ />
    </main>
  );
}
