"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../button';

//Map of links to display in the side navigation.
const links = [
    { 
        name: 'Profile',
        href: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
      
    },
    { 
        name: 'Logout',
        href: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
      
      
    },
    
];

const SideBottomLinks = () => {
    const router = useRouter();

    const handleLogout = async() => {
        try {
            const response = await fetch('http://127.0.0.1:8000/accounts/api/logout/',{
                method: 'POST',
                credentials: 'include', //including cookies in the request
            });

            if (response.ok) {
                // redirect to homepage after successful logout
                router.push('http://localhost:3000');
            } else {
                console.error('Logout failed');
                //optionally,handle failed logout (show error message).
            }
        } catch (error) {
            console.error('Error during logout:', error);
            // Handle network errors here.
        }
    };

    return (
        <>
            {links.map((link) => {
                return (
                    <div key={link.name} className='flex w-full'>
                        {link.name === 'Logout' ? (
                            <Button 
                                variant='ghost'
                                onClick={handleLogout}
                                className='{ clsx ("flex w-full grow items-center rounded-full text-sm font-medium hover:bg-green-800 hover:text-slate-100 md:flex-none md:justify-start  px-4 md:px-4",
                                    {
                                    "bg-sky-100": pathname === link.href,
                                    },
                                )}'
                            >
                                {link.icon}
                                <p className='block px-4'>{link.name}</p>
                            </Button>
                        ): (
                            <Link 
                                href={link.href}
                                className='{ clsx ("flex w-full grow items-start rounded-full text-sm font-medium hover:bg-green-800 hover:text-slate-100 md:flex-none md:justify-start  px-4 md:px-4",
                                    {
                                    "bg-sky-100": pathname === link.href,
                                    },
                                )}'
                            >
                                <div className='flex space-x-4 md:space-x-2 items-center'>
                                    {link.icon}
                                    <p className='block p-2'>{link.name}</p>
                                </div>
                            </Link>
                        )}
                        
                    </div>
                );
            })}
        </>
    );
}

export default SideBottomLinks

