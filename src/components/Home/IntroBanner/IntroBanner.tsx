import React from 'react';
import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";
import Button from '@/components/ui/button';

// Google fonts
const cinzel = Cinzel_Decorative({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const IntroBanner = () => {
    return (
        <div className="relative h-[480px] mt-16 overflow-hidden flex items-center justify-center text-center">
            {/* Background image */}
            <Image
                src="/IntroBanner.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />

            {/* Content */}
            <div className="relative z-20 px-4 text-white flex flex-col items-center justify-center max-w-[1150px] w-full">
                <h1 className={`${cinzel.className} text-2xl sm:text-3xl md:text-5xl font-bold uppercase leading-tight text-center w-full max-w-[1150px]`}>
                    Dive into the World of Sumptuous Sum Dim Sum
                </h1>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-[#E6F6FC] leading-relaxed w-full max-w-[850px] min-h-[96px] opacity-85 mb-4">
                    Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let every dish transport you to the heart of dim sum perfection.
                </p>

                <Button label="Explore More" />
            </div>
        </div>
    );
};

export default IntroBanner;
