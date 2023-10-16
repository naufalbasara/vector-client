import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import * as React from 'react';
import Button from '@/components/buttons/Button';

export default function Project() {
  const [text, SetText] = React.useState('');
  const component = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#']

  return (
    <Layout>
      <Seo templateTitle='Smart KWh Meter Project' />
      <main className='min-h-screen pt-32 flex flex-col items-center text-center'>
          <h1 className='m-2'>Smart KWh Meter Project</h1>
          <div className='m-4 w-full flex justify-center items-center h-20 bg-gray-400'>
            <input type='text' value={text}></input>
            <Button className='bg-[#f00] mx-6' onClick={() => {SetText('')}}>Delete</Button>
          </div>
          
          <div className='container grid grid-cols-3 w-max'>
            {component.map((value:any) => (
              <Button className='max-w-max p-4 sm:p-8 md:p-16 m-2' onClick={() => {SetText(`${text + value}`)}}>{value}</Button>
              ))}
          </div>
      </main>
    </Layout>
  );
}
