import type { Metadata } from 'next';
import { Inter, Exo_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '../components/footer/Footer';
import { Providers } from './store/provider';
import { ProvidersAuth } from '@/app/api/auth/Providers'; 
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const exo = Exo_2({ subsets: ['latin'], variable: '--font-exo_2' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <body className={`${inter.variable} ${exo.variable} bg-[#FBFBFB]`}>
        <Providers>
          <ProvidersAuth>
            <Header />
            {children}
            <Footer />
          </ProvidersAuth>
        </Providers>
      </body>
    </html>
  );
}
