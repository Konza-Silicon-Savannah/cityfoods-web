"use client"

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//Map of links to display in the side navigation.
const links = [
    { 
        name: 'dash',
        href: '/dashboard',
        icon: <MenuOpenIcon/>
    },
    { 
        name: 'home', 
        href: '/dashboard/home',
        icon: <HomeIcon />
    },
    { 
        name: 'orders',
        href: '/dashboard/orders',
        icon: <LocalMallIcon />
    },
    {
        name: 'wallet',
        href: '/dashboard/wallet',
        icon: <AccountBalanceWalletIcon />
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
                        className='{ clsx ("flex h-[48px] grow items-center justify-center gap-2 rounded-md b-gray-50 p-4 text-sm font-medium  hover:text-slate-700 md:flex-none md:justify-start md:p-4 md:px-4",
                            {
                            "bg-sky-100 text-blue-600": pathname === link.href,
                            },
                        )}'
                    >
                        <div className='flex gap-2 items-center text-green-700'>
                            {link.icon}
                            <p className='hidden md:block'>{link.name}</p>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default NavLinks