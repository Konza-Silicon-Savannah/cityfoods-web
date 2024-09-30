"use client"

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { link } from 'fs';


//Map of links to display in the side navigation.
const links = [
    { name: 'Home', href: '/dashboard'},
    { 
        name: 'orders',
        href: '/dashboard/orders'
    },
    {
        name: 'wallet',
        href: '/dashboard/wallet'
    }
];

const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link 
                        key={link.name}
                        href={link.href}
                        className='{ clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md b-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                            "bg-sky-100 text-blue-600": pathname === link.href,
                            },
                        )}'
                    >
                        <p className='hidden md:block'>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

export default NavLinks