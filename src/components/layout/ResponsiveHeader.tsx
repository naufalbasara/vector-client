import UnstyledLink from '@/components/links/UnstyledLink';
import { NextRequest } from 'next/server';

import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

export default function ResponsiveHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/project', label: 'Smart kWh Meter' },
  ];

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
      {links.map((link, index) => (
        <Typography
          key={index}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-normal'
        >
          <a href={link.href} className='flex items-center text-red-400 hover:text-red-800'>
            {link.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className='fixed z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none'>
        <div className='flex items-center justify-between text-red-400'>
          <UnstyledLink
            href='/'
            className='text-2xl font-bold hover:text-red-800 transition'
          >
            V E C T O R
          </UnstyledLink>
          <div className='flex items-center gap-4 text-red-400'>
            <div className='mr-4 hidden lg:block'>{navList}</div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  );
}

// export async function getServerSideProps(req:NextRequest) {
//   const token = req.cookies.get('vector/token')?.value
//   console.log(req.cookies);

//   if (!token) {
//     return false
//   }

//   return true
// }