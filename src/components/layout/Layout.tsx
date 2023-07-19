import * as React from 'react';
import ResponsiveHeader from '@/components/layout/ResponsiveHeader';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
    <ResponsiveHeader />
    <main className='bg-gray-200'>
      {children}
      <Footer />
    </main>
  </>;
}
