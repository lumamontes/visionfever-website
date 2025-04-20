'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { menuItems } from '@/data/menuItems';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const VerticalSeparator = () => (
        <div className="hidden md:block h-5 w-px mx-6 bg-gray-700 opacity-30"></div>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 max-w-sm mx-auto">
            <Container className="flex justify-center !px-0 py-4">
                <nav className={`
                    flex items-center py-3 px-6 w-full
                    max-w-screen-md mx-auto
                    rounded-full
                    transition-all duration-300
                    ${scrolled ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-900 bg-opacity-60'} 
                    backdrop-blur-sm
                    border border-gray-800
                `}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="w-6 h-6 relative">
                            <div className="absolute inset-0 w-full h-full text-white">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L15.5 8.5H8.5L12 1Z" fill="currentColor" />
                                    <path d="M12 23L8.5 15.5H15.5L12 23Z" fill="currentColor" />
                                    <path d="M1 12L8.5 8.5V15.5L1 12Z" fill="currentColor" />
                                    <path d="M23 12L15.5 15.5V8.5L23 12Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    
                    <VerticalSeparator />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className={
                                            cn(
                                                "text-gray-300 hover:text-white transition-colors text-base font-normal",
                                                pathname === item.url ? "text-white" : "",
                                            )
                                    }
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none p-2 flex items-center justify-center transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-5 w-5" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-gray-900 bg-opacity-90 border-t border-gray-800 backdrop-blur-sm">
                    <ul className="flex flex-col space-y-3 pt-3 pb-4 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-gray-300 hover:text-white block py-1.5 transition-colors" 
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;