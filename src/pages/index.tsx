import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import * as React from 'react';

export default function HomePage() {
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <Layout>
      <Seo />
      <div className='bg-vector_home bg-no-repeat bg-cover bg-center bg-scroll flex items-end justify-center h-96 md:h-screen'>
        <div className='flex my-14 lg:mr-[-700px] xl:mr-[-800px] 2xl:mr-[-950px] mr-0'>
          <ButtonLink
            href='https://tokopedia.link/bGviZR6r9xb'
            className='bg-black border-red-400 hover:text-red-600 hover:bg-gray-400 transition mx-2'
          >
            Order Now
          </ButtonLink>
          <ButtonLink
            href='https://wa.me/6282111622592'
            className='bg-white text-black border-none hover:text-red-600 hover:bg-gray-400 transition mx-2'
          >
            Custom Order
          </ButtonLink>
        </div>
      </div>

      
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <section className='mb-24 w-full flex flex-col justify-content-center align-items-center'>
              <h1 className=' mb-6'>
                Vector Electric ATV{' '}
                <span className='text-red-600'>ICONIC Z5</span>
              </h1>
              <iframe
                className='m-auto w-4/5 aspect-video'
                src='https://www.youtube.com/embed/VHbHDIvEVSk'
              ></iframe>
            </section>

            <section>
              <NextImage
                useSkeleton
                src='/images/vector_flyer.jpg'
                className='max-w-screen'
                imgClassName='max-w-screen'
                width='1080'
                height='320'
                alt='ICONIC Z5 by Vector Motors'
              />
              <NextImage
                useSkeleton
                src='/images/products/phantom_v1/Phantom_V1_bg.png'
                className='max-w-screen mt-24'
                imgClassName='max-w-screen'
                width='1080'
                height='320'
                alt='Phantom V1 by Vector Motors'
              />
            </section>

            <section className='my-32 md:flex items-center justify-center animate-fade-in-down'>
              <div className='md:w-56 md:mr-24 mb-8'>
                <h1 className='md:text-center md:text-left mb-4'>Prototype</h1>
                <p className='md:text-center md:text-left sm:text-base text-sm mb-4 font-bold'>
                  Vector answers the challenge of creating an optimal
                  alternative electric vehicle.
                </p>
                <hr />
                <p className='md:text-center md:text-left sm:text-base text-sm italic'>
                  " We started by creating a prototype in product development
                  through designs, samples or models with the aim of testing the
                  concept or work process of the product. "
                </p>
              </div>
              <div className='sm:my-6 grid grid-cols-2 gap-2 mx-2 sm:gap-10 sm:mx-10'>
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

            <section className='my-32'>
              <div className='md:max-w-screen grid grid-cols-3 gap-1'>
                <NextImage
                  useSkeleton
                  src='/images/products/ICONIC_Z5/iconic_outdoor.JPG'
                  className='object-fill mx-auto w-9/12 h-auto'
                  width='240'
                  height='320'
                  alt='eATV by Vector Motors'
                />
                <NextImage
                  useSkeleton
                  src='/images/products/phantom_v1/phantom_v1_indoor3.JPG'
                  className='object-fill mx-auto w-9/12 h-auto'
                  width='240'
                  height='320'
                  alt='Phantom V1 by Vector Motors'
                />
                <NextImage
                  useSkeleton
                  src='/images/products/phantom_h5/phantom_h5_outdoor.JPG'
                  className='object-fill mx-auto w-9/12 h-auto'
                  width='240'
                  height='320'
                  alt='Phantom H5 by Vector Motors'
                />
              </div>
              <p className='mt-16 text-center sm:text-xl text-sm italic'>
                " Redefining the potential stigma of electric vehicles by
                raising the standard level of functionality for alternative
                vehicles to be reliable, making the best possible product can
                make a significant difference in evolution "
              </p>
            </section>

            <section id='contact'>
              <div className='section-title'>
                <h1 className='text-left mb-4'>Find Us</h1>
              </div>
              <div className='mapouter'>
                <div className='gmap_canvas'>
                  <iframe
                    className='m-auto w-full aspect-video'
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=Vector+Motors+Indonesia&t=&z=15&ie=UTF8&iwloc=&output=embed'
                  ></iframe>
                </div>
              </div>
              <div className='container' data-aos='fade-up'>
                <div className='row mt-5'>
                  <div className='col-lg-8 mt-5 mt-lg-0'></div>
                </div>
              </div>

              <div className='my-16 sm:mt-0 '>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                  <div className='md:col-span-1'>
                    <div className='px-4 sm:px-0'>
                      <h3 className='text-base font-semibold leading-6 text-gray-900'>
                        Personal Information
                      </h3>
                      <p className='mt-1 text-sm text-gray-600'>
                        Use a permanent address where you can receive mail.
                      </p>
                    </div>
                  </div>
                  <div className='mt-5 md:col-span-2 md:mt-0'>
                    <form>
                      <div className='overflow-hidden shadow sm:rounded-md'>
                        <div className='bg-white px-4 py-5 sm:p-6'>
                          <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-12'>
                              <label
                                htmlFor='name'
                                className='block text-left text-sm font-medium leading-6 text-gray-900'
                              >
                                First name
                              </label>
                              <input
                                name='name'
                                id='name'
                                className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                              />
                            </div>
                            <div className='col-span-6 sm:col-span-12'>
                              <label
                                htmlFor='email-address'
                                className='block text-left text-sm font-medium leading-6 text-gray-900'
                              >
                                Email address
                              </label>
                              <input
                                name='email-address'
                                id='email-address'
                                className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                              />
                            </div>
                            <div className='col-span-6 sm:col-span-12'>
                              <label
                                htmlFor='subject'
                                className='block text-left text-sm font-medium leading-6 text-gray-900'
                              >
                                Subject
                              </label>
                              <input
                                onChange={(event) => {
                                  setSubject(event.target.value);
                                }}
                                name='subject'
                                id='subject'
                                className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                              />
                            </div>
                            <div className='col-span-6 sm:col-span-12'>
                              <label
                                htmlFor='message'
                                className='block text-left text-sm font-medium leading-6 text-gray-900'
                              >
                                Message
                              </label>
                              <input
                                onChange={(event) => {
                                  setMessage(event.target.value);
                                }}
                                name='message'
                                id='message'
                                className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                          <a
                            // type='submit'
                            href={`mailto:vectormotorsindonesia@gmail.com?subject=${subject}&body=${message}`}
                            className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                          >
                            Submit
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
    </Layout>
  );
}
