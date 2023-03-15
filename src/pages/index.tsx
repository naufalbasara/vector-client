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
import styles from '../styles/Home.module.css';
import img from 'public/images/products/eATV/Iconic_Z5_2.png';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Header/>
      <div
        style={{
          backgroundImage: `url(/images/products/eATV/Iconic_Z5_2.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          marginTop: '0',
          paddingTop: '0',
          height: '100vh',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',

        }}
      >                  
                  <div className='flex my-14 mr-[-950px]'>
                    <ButtonLink href='https://tokopedia.link/bGviZR6r9xb' className='bg-black border-red-400 hover:text-red-600 hover:bg-gray-400 transition mx-2'>
                      Order Now
                    </ButtonLink>
                    <ButtonLink href='https://wa.me/6282111622592' className='bg-white text-black border-none hover:text-red-600 hover:bg-gray-400 transition mx-2'>
                      Custom Order
                    </ButtonLink>
                  </div>   
      </div>

      <main className='bg-gray-200'>
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <section className='mb-12 flex items-center justify-center animate-fade-in-down'>
                {/* <NextImage
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
                </section> */}
            </section>
            
            <section className='mb-24'>
            <h1 className='text-center mb-6'>Vector Electric ATV <span className='text-red-600'>ICONIC Z5</span></h1>
            <iframe width="840" height="480" src="https://www.youtube.com/embed/VHbHDIvEVSk"></iframe>
            </section>

            <section>
              <NextImage
                        useSkeleton
                        src='/images/products/vector_flyer.jpg'
                        className='max-w-screen'
                        width='1080'
                        height='320'
                        alt='Phantom H5 by Vector Motors'
              />
              <NextImage
                        useSkeleton
                        src='/images/products/Phantom.png'
                        className='max-w-screen mt-24'
                        width='1080'
                        height='320'
                        alt='Phantom H5 by Vector Motors'
              />
            </section>

            <section className='my-32 flex items-center justify-center animate-fade-in-down'>
              <div className='w-56 mr-24'>
              
                <h1 className='text-left mb-4'>Prototype</h1>
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
              <div className='max-w-screen grid grid-cols-3 gap-1'>
              <NextImage
                          useSkeleton
                          src='/images/products/eATV/iconic_outdoor.JPG'
                          className='object-cover mx-auto'
                          width='240'
                          height='320'
                          alt='eATV by Vector Motors'
                        />
                <NextImage
                        useSkeleton
                        src='/images/products/phantom_v1/phantom_v1_indoor3.JPG'
                        className='object-cover mx-auto'
                        width='240'
                        height='320'
                        alt='Phantom V1 by Vector Motors'
                      />
                <NextImage
                        useSkeleton
                        src='/images/products/phantom_h5/phantom_h5_outdoor.JPG'
                        className='object-cover mx-auto'
                        width='240'
                        height='320'
                        alt='Phantom H5 by Vector Motors'
                      />
              </div>
              <p className='mt-16 text-center text-xl italic'>" Redefining the potential stigma of electric vehicles by raising the standard level of functionality for alternative vehicles to be reliable, making the best possible product can make a significant difference in evolution "</p>
            </section>
            
            <section id="contact">
              <div className="section-title">
                <h1 className='text-left mb-4'>Find Us</h1>
              </div>
            <div className="mapouter"><div className="gmap_canvas"><iframe width="1080" height="270" id="gmap_canvas" src="https://maps.google.com/maps?q=Vector+Motors+Indonesia&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
            <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <div className="col-lg-8 mt-5 mt-lg-0">
                </div>
              </div>
            </div>

            <div className="my-16 sm:mt-0 ">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-12">
                            <label htmlFor="name" className="block text-left text-sm font-medium leading-6 text-gray-900">First name</label>
                            <input name="name" id="name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                          </div>
                          <div className="col-span-6 sm:col-span-12">
                            <label htmlFor="email-address" className="block text-left text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <input name="email-address" id="email-address" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                          </div>
                          <div className="col-span-6 sm:col-span-12">
                            <label htmlFor="subject" className="block text-left text-sm font-medium leading-6 text-gray-900">Subject</label>
                            <input name="subject" id="subject" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                          </div>
                          <div className="col-span-6 sm:col-span-12">
                            <label htmlFor="message" className="block text-left text-sm font-medium leading-6 text-gray-900">Message</label>
                            <input name="message" id="message" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </section>
            <Footer/>
          </div>
        </section>
      </main>
    </Layout>
  );
}
