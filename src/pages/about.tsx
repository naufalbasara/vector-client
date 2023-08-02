import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import * as React from 'react';

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <div className='bg-vector_about bg-no-repeat py-20 bg-cover bg-center bg-scroll flex flex-col items-center justify-evenly min-h-screen md:h-screen text-white'>
      <div className='sm:mt-4  grid grid-cols-4 gap-2 mx-2 sm:gap-10 sm:mx-10 pb-6'>
            <NextImage
              useSkeleton
              src='/images/charity-event.png'
              className='object-fill mx-auto w-full'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
            <NextImage
              useSkeleton
              src='/images/vector-itb.png'
              className='object-fill mx-auto w-full'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
            <NextImage
              useSkeleton
              src='/images/products/ALPHA_R1/alpha-r1-outdoor.png'
              className='object-fill mx-auto w-full'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
            <NextImage
              useSkeleton
              src='/images/products/PHANTOM_H5/phantom_h5_outdoor.JPG'
              className='object-fill mx-auto w-full'
              width='240'
              height='320'
              alt='Phantom V1 by Vector Motors'
            />
      </div>

        <section className=''>
          <h1 className='text-red-500 font-bold text-center mb-4'>Company Overview</h1>
          <div className='grid grid-cols-2 gap-4'>
            <p className='ml-10 text-justify text-[10px] sm:text-xs md:text-xs lg:text-base'>Vector Motors merupakan usaha yang utamanya bergerak di bidang kendaraan listrik dan penyimpanan energi. Sejak awal terbentuk, kami telah menciptakan berbagai kendaraan listrik alternatif dalam skala kecil dengan tipe uji prototype, serta mengembangkan energy storage system sebagai tahap awal distrupsi kami dalam bentuk adaptasi transisi. Hal ini muncul berdasarkan kesadaran terhadap kondisi permasalahan isu lingkungan dan teknologi secara global.</p>
            <p className='mr-10 text-justify text-[10px] sm:text-xs md:text-xs lg:text-base'>Dengan visi "Menciptakan peluang dengan memberdayakan mobilitas masa depan melalui kendaraan listrik yang menarik di bumi" dan misi "Melakukan distrupsi skala mobilitas kendaraan dengan mengubah cara orang bergerak di masa depan melalui kendaraan listrik yang memberikan pengalaman berkendara secara revolusioner dan mengesankan." Vector Motors berkomitmen untuk menghadirkan solusi mobilitas inovatif yang memanfaatkan kendaraan listrik sebagai sarana untuk menciptakan peluang baru bagi mobilitas masa depan. Tagline "Rise Beyond Limits" mencerminkan semangat kami untuk terus berinovasi, melampaui batas, dan menghadapi tantangan dengan tekad kuat.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
