import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import * as React from 'react';

export default function Product() {
  return (
    <Layout>
      <Seo templateTitle='Product' />
      <main className='min-h-screen flex flex-col justify-center items-center text-red-600 text-center'>
        <h1>Coming Soon...</h1>
        <section className='my-4 flex flex-col items-center sm:text-lg text-base'>
          <ArrowLink
            href='https://instagram.com/vectormotors.id'
            as={UnstyledLink}
            className='sm:mb-0 mb-4 inline-flex items-center hover:text-[#A0A0A0]'
          >
            check our instagram
          </ArrowLink>
          <div className='sm:my-4 grid grid-cols-2 gap-2 mx-2 sm:gap-10 sm:mx-10'>
            <NextImage
              useSkeleton
              src='/images/products/phantom_v1/phantom_v1_indoor.PNG'
              className='object-fill mx-auto w-full h-auto'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
            <NextImage
              useSkeleton
              src='/images/products/phantom_v1/phantom_v1_indoor2.PNG'
              className='object-fill mx-auto w-full h-full'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
