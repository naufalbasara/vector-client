import * as React from 'react';
import ResponsiveHeader from '@/components/layout/ResponsiveHeader';
import Footer from '@/components/layout/Footer';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['100', '200', '300', '400', '500', '600', '700'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={poppins.className + ' bg-gray-200 mt-0'}>
    <ResponsiveHeader />
    <div>
      {children}
    </div>
    <Footer />
  </main>;
}
