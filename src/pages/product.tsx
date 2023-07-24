import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import * as React from 'react';
import ProductCard from '@/components/ProductCard';

export default function Product() {
  const [products, setProducts] = React.useState([{id: null, name:'', category:'', description:'', image_path: ''}])
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
      <main className='min-h-screen pt-32 flex flex-col justify-center items-center w-screen'>
        <h1 className='underline decoration-red-500 decoration-4'>Let's see our products</h1>
        <section className='sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-8'>
          {!isLoading && products?.map((obj):any => (
          <ProductCard
            key={obj.id}
            name={obj.name}
            category={obj.category}
            description={obj.description}
            image_path={obj.image_path}
            href='#'
          />
          ))}
        </section>
      </main>
    </Layout>
  );
}
