import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import * as React from 'react';
import ProductCard from '@/components/ProductCard';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Product() {
  const [products, setProducts] = React.useState([{id: null,slug:'', name:'', category:'', description:'', image_path: ''}])
  const dataFetchedRef = React.useRef(false);
  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    try {
      setLoading(true)
      fetch('api/products').then((response:any) => {
        response.json().then((response:any)=> {
          const data = [...response]
          setProducts(data);
          setLoading(false)
        })
      })
    } catch {
      console.log('failed to fetch');
    }
  }, [])

  return (
    <Layout>
      <Seo templateTitle='Product' />
      <main className='min-h-screen pt-32 '>
        <section className='flex flex-col justify-center items-center w-screen'>
        <h1 className='underline decoration-red-500 decoration-4'>Let's see our products</h1>
        <section className={isLoading ? "" : 'sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-8'}>
          {isLoading && 
          <div className='text-center'>
            <p className='text-lg sm:text-xl md:text-3xl'>loading... <svg xmlns="http://www.w3.org/2000/svg" className='animate-spin text-red-500 inline' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-84 31-157t85-127q54-54 127-85t157-31q12 0 21 9t9 21q0 12-9 21t-21 9q-141 0-240.5 99.5T140-480q0 141 99.5 240.5T480-140q141 0 240.5-99.5T820-480q0-12 9-21t21-9q12 0 21 9t9 21q0 84-31 157t-85 127q-54 54-127 85T480-80Z"/></svg></p>
            <p> while waiting, check our <UnderlineLink href='https://instagram.com/vectormotors.id' className='text-blue-800 hover:'>instagram</UnderlineLink></p>
            </div>
          }
          {!isLoading && products?.map((obj):any => (
          <ProductCard
            key={obj.id}
            name={obj.name}
            category={obj.category}
            description={obj.description}
            image_path={obj.image_path}
            href={'/product/' + obj.slug}
          />
          ))}
        </section>
        </section>
      </main>
    </Layout>
  );
}
