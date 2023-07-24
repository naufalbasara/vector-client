import * as React from 'react';
import ResponsiveHeader from '@/components/layout/ResponsiveHeader';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <main className='bg-gray-200 mt-0'>
    <ResponsiveHeader />
    <div>
      {children}
    </div>
    <Footer />
  </main>;
}
