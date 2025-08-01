
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Raleway} from 'next/font/google';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Menu & Locations", href: "/menu" },
        { name: "Reservation", href: "/reservation" },
        { name: "Merchandise", href: "/merchandise" },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
    ]


    return (
        <header className="mx-auto container absolute top-8 left-1 right-0 z-50 px-6 py-6 lg:px-12">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Sum Dim Sum Logo"
                            width={120}
                            height={60}
                            className="h-12 w-auto  "
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`${raleway.className} text-white hover:text-gray-300 transition-colors font-medium text-sm tracking-wide`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Book a Table Button */}
                <button className="hidden lg:block bg-transparent border border-white text-white px-6 py-2.5 rounded hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-wide">
                    Book a Table
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10">
                    <div className="px-6 py-6 space-y-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-white hover:text-gray-300 transition-colors font-medium text-base py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 bg-transparent border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-medium">
                            Book a Table
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
