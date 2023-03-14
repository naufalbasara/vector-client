import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Products' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Contact' },
  { href: '/', label: 'Store' },
];

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-transparent text-red-400'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='text-2xl font-bold hover:text-red-500 transition'>
          V E C T O R
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-16'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-red-800 transition'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
