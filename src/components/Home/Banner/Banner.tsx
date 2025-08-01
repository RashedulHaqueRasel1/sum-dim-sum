
import Image from "next/image";
import Link from "next/link";
import { Cinzel_Decorative, Raleway } from 'next/font/google';
import Button from "@/components/ui/button";

const cinzel = Cinzel_Decorative({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Banner = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-background.jpg"
                    alt="Authentic dim sum in bamboo steamer with blue dumplings"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 opacity-20" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">

                <h1
                    className={`${cinzel.className} text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[1450px] mb-6 leading-snug`}
                >
                    WELCOME TO SUM DIM SUM – WHERE EVERY BITE TELLS A STORY
                </h1>

                <p
                    className={`${raleway.className} text-white text-base md:text-xl lg:text-lg font-normal max-w-[950px] mb-10 opacity-80`}
                >
                    At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable
                    dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of
                    taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!
                </p>

                {/* CTA Button */}
                <Button label="Explore Our Menu" />


            </div>

            {/* Social Badge */}
            <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-20">
                <Link
                    href="https://www.instagram.com/sumdimsum/"
                    target="_blank"
                    className="group"
                >
                    <Image
                        src="/sideLogo.png"
                        alt="Follow us on Instagram"
                        width={100}
                        height={100}
                        className="w-24 h-24 sm:w-32 sm:h-32 object-contain  "
                    />
                </Link>
            </div>
        </section>
    );
};

export default Banner;
