'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Inicio', href: '/dashboard', icon: '' },
  {
    name: 'Modelos de Encarte',
    href: '/dashboard/flyer-models',
    icon: '',
  },
  {
    name: 'Meus Encartes',
    href: '/dashboard/meus-encartes',
    icon: '',
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-sm bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-zinc-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-zinc-600': pathname === link.href,
              },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}