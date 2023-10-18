import Seo from '@/components/Seo';
import Layout from '@/components/layout/Layout';
import * as React from 'react';
import Button from '@/components/buttons/Button';
import axios from 'axios';

export default function Project() {
  const [text, SetText] = React.useState('');
  const [powerState, setPowerState] = React.useState(false);
  const component = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#']

  const submitState = async () => {
    const response = await fetch('https://backend.thinger.io/v3/users/rtaufiqulrtrh/devices/Vector/resources/D0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJWZWN0b3IiLCJpYXQiOjE1OTIyOTEwMjMsImp0aSI6IjVlZTg2ZWNmYTcyNmE5NjU3YTc3NjY4MiIsInVzciI6InJ0YXVmaXF1bHJ0cmgifQ.QdvuykrWxQ3at81w0VjL1eyfZ0dMzzGI9AvYB4cBfFg',
        'Accept': 'application/json'
      },
      body: `${powerState}`
    })
    setPowerState(!powerState)
    console.log(response)
  }

  return (
    <Layout>
      <Seo templateTitle='Smart KWh Meter Project' />
      <main className='min-h-screen pt-32 flex flex-col items-center text-center'>
          <h1 className='m-2'>Smart KWh Meter Project</h1>
          <div className='m-4 w-full flex justify-center items-center'>
            {
              powerState ? (
                <Button className='bg-[#2CA87F] hover:bg-gray-500 rounded-full p-10' onClick={submitState}>On</Button>
              ) : (<Button className='bg-red-500 hover:bg-red-800 mx-6 rounded-full p-10' onClick={submitState}>Off</Button>)
            }
          </div>
          <div className='m-4 w-full flex justify-center items-center h-20 bg-gray-400'>
            <input type='text' value={text}></input>
            <Button className='bg-red-500 hover:bg-red-800 mx-6' onClick={() => {SetText('')}}>Delete</Button>
            <Button className='bg-[#2CA87F] hover:bg-gray-500' onClick={() => {alert("Token Submitted")}}>Submit</Button>
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
