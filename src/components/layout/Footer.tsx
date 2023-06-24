import UnderlineLink from '@/components/links/UnderlineLink';
import * as React from 'react';

export default function Footer() {
  return (
    <footer className='absolute bottom-2 text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='https://vectormotors.id'>
        Vector Motors Indonesia
      </UnderlineLink>
    </footer>
  );
}
