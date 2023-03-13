import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NextImage from '@/components/NextImage';
import Image, { ImageProps } from 'next/image';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 *
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='bg-gray-200'>
        <Header/>
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <section className='mb-16 flex items-center justify-center animate-fade-in-down'>
                <NextImage
                  useSkeleton
                  src='/images/products/trion_d5.JPEG'
                  width='320'
                  height='480'
                  alt='Trion D5 by Vector Motors'
                />
                <section className='mx-10 flex flex-col justify-center animate-fade-in-down'>
                  <h1 className='text-[48px] mb-6'>Vector Motors Indonesia</h1>
                  <hr />
                  <p className='text-xl'>Discover your ambitions</p>
                </section>
            </section>

            <section className='my-32 flex items-center justify-center animate-fade-in-down'>
              <div className='w-56 mr-24'>
                <p className='text-left text-s mb-4'>Vector answers the challenge of creating an optimal alternative electric vehicle.</p>
                <hr />
                <p className='text-left text-s'> We started by creating a prototype in product development through designs, samples or models with the aim of testing the concept or work process of the product.</p>
              </div>
              <div className='grid grid-cols-2 gap-1'>
                <NextImage
                    useSkeleton
                    src='/images/products/phantom_v1/phantom_v1_indoor.PNG'
                    width='240'
                    height='320'
                    alt='Phantom V1 by Vector Motors'
                />
                <NextImage
                    useSkeleton
                    src='/images/products/phantom_v1/phantom_v1_indoor2.PNG'
                    width='240'
                    height='320'
                    alt='Phantom V1 by Vector Motors'
                  />
              </div>
            </section>

            <section className='my-32'>
              <div className='grid grid-cols-3 gap-1'>
              <NextImage
                          useSkeleton
                          src='/images/products/eATV/eATV_outdoor3.JPG'
                          className='object-cover'
                          width='240'
                          height='320'
                          alt='eATV by Vector Motors'
                        />
                <NextImage
                        useSkeleton
                        src='/images/products/phantom_v1/phantom_v1_indoor3.JPG'
                        width='240'
                        height='320'
                        alt='Phantom V1 by Vector Motors'
                      />
                <NextImage
                        useSkeleton
                        src='/images/products/phantom_h5/phantom_h5_outdoor.JPG'
                        width='240'
                        height='320'
                        alt='Phantom H5 by Vector Motors'
                      />
              </div>
            </section>
            
            
            <Footer/>
          </div>
        </section>
      </main>
    </Layout>
  );
}
