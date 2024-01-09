'use client';
import clsx from 'clsx';
import { link } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoBugSharp } from 'react-icons/io5';

type Props = {};

const Navbar = (props: Props) => {
  const currentPath = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues',
    },
  ];

  return (
    <nav className='flex items-center justify-between text-zinc-500 border-b  px-5 h-14 mb-5'>
      <Link href='/'>
        <IoBugSharp />
      </Link>

      <div className='flex gap-x-6'>
        {links.map(({ label, href }) => (
          <Link
            className={clsx(
              'hover:text-zinc-800 transition-colors',
              href === currentPath ? 'text-zinc-900' : 'text-zinc-500'
            )}
            href={href}
            key={label}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
