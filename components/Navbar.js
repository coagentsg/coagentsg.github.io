'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/team' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Publications', href: '/publications' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 w-full z-50 apple-blur border-b border-zinc-200/50">
            <nav className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
                <Link href="/" className="text-lg font-bold tracking-tighter text-zinc-900 uppercase hover:text-zinc-900">
                    COAGENT LAB
                </Link>

                <div className="hidden md:flex gap-8 items-center font-sans tracking-tight antialiased text-sm font-medium">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={
                                pathname === l.href
                                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                                    : 'text-zinc-500 hover:text-zinc-800 transition-colors'
                            }
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-zinc-800 active:scale-95 hidden sm:block"
                    >
                        Join Us
                    </Link>
                    <button
                        className="md:hidden text-zinc-800"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-zinc-200/50 px-8 py-6 flex flex-col gap-4">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={
                                pathname === l.href
                                    ? 'text-blue-600 font-semibold text-base'
                                    : 'text-zinc-600 text-base hover:text-zinc-900'
                            }
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
