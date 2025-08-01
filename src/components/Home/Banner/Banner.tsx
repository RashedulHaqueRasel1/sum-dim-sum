import React from 'react';
import { Cinzel_Decorative } from 'next/font/google';

const cinzel = Cinzel_Decorative({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Banner = () => {
    return (
        <div>
            <h1 className={`${cinzel.className} text-3xl font-bold`}>This is banner</h1>
        </div>
    );
};

export default Banner;