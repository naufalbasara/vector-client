import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { InferGetStaticPropsType } from 'next';
import { getProductDetails, getAllProducts } from '@/lib/products';
import SwiperComponent from '@/components/SwComponent';
import SwComponent from '@/components/SwComponent';

type Params = {
  params: {
    slug: string;
  };
};

const SinglePage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <Seo templateTitle={data?.name} />
        <div className=' flex flex-col items-center mx-10 pt-20 min-h-screen'>
          <SwComponent images={data?.image_path}/>
          <h1 className='text-red-600'>{data?.name}</h1>
          <p className='text-[#A0A0A0]'>{data?.category}</p>
          <p className='mt-2 text-justify text-base sm:text-md'>{data?.description}</p>
          <p className='font-bold text-lg mt-10'>#Rise Beyond Limit</p>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const data = await getAllProducts();

  return {
    paths: data?.map((obj:any) => ({
      params: {
        slug: obj.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const data = await getProductDetails(params.slug)

  return {props: {data}}
  
};

export default SinglePage;