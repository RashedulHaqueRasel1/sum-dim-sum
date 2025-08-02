"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Title from "@/components/ui/title";
import { useState } from "react";

import { Passions_Conflict, Raleway } from "next/font/google";

const Passions = Passions_Conflict({
    weight: "400",
    subsets: ["latin"],
});

const raleway = Raleway({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});


const testimonials = [
    {
        name: "Rosario Roca",
        quote:
            "Sum Dim Sum is more than just a restaurant—it's an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you're greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.",
        image: "/testimonial-1.jpg",
    },
    {
        name: "Rosario Roca",
        quote:
            "Sum Dim Sum is more than just a restaurant—it's an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you're greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.",
        image: "/testimonial-1.jpg",
    },
    {
        name: "Rosario Roca",
        quote:
            "Sum Dim Sum is more than just a restaurant—it's an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you're greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.",
        image: "/testimonial-1.jpg",
    },
];

const Testimonial = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: { perView: 1 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <div className="mt-32">
            <Title text="The Talk of the Town" imgSrc="/objects.png" />

            <section
                className="relative bg-cover bg-center py-16 px-4 sm:px-8 lg:px-20 text-white mt-6"
                style={{ backgroundImage: "url('/testimonial-bg.png')" }}
            >
                <div className="  text-center relative z-10">
                    <div ref={sliderRef} className="keen-slider ">
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                className="keen-slider__slide px-4 flex flex-col items-center relative"
                            >
                                {/* Left side quote icon */}
                                <Image
                                    src={"/Quote.png"}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="  w-24 h-24 absolute top-4 left-1 text-white/60 scale-x-[-1]"
                                />

                                {/* Left arrow */}
                                <button
                                    className="absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer"
                                    onClick={() => instanceRef.current?.prev()}
                                >
                                    <ChevronLeft className="w-10 h-10 text-white/70 hover:text-white transition" />
                                </button>

                                {/* Right arrow */}
                                <button
                                    className="absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer"
                                    onClick={() => instanceRef.current?.next()}
                                >
                                    <ChevronRight className="w-10 h-10 text-white/70 hover:text-white transition" />
                                </button>

                                {/* Profile picture */}
                                <div className="w-20 h-20 rounded-full overflow-hidden  shadow-lg mb-10">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={56}
                                        height={56}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Testimonial text */}
                                <p className={`${raleway.className} text-sm sm:text-base text-[#E6F6FC]/80  leading-relaxed font-normal w-[994px] `}>
                                    {item.quote}
                                </p>

                                {/* Stars */}
                                <div className="mt-6 flex justify-center gap-1 text-yellow-400 mb-6">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.783 1.401 8.173L12 18.896l-7.335 3.854 1.401-8.173L.132 9.211l8.2-1.193z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Slide dots */}
                                <div className="mt-6 flex justify-center gap-3">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => instanceRef.current?.moveToIdx(i)}
                                            className={`w-3 h-3 transform rotate-45 border-2 ${currentSlide === i
                                                    ? "bg-white border-white"
                                                    : "bg-transparent border-white/50"
                                                }`}
                                        ></button>
                                    ))}
                                </div>


                                {/* Stylish name shifted to right */}
                                <div className="w-full flex justify-end pr-8">
                                    <p className={`${Passions.className} mt-6 italic text-7xl text-[#F8F8FF66]/80 font-signature`}>
                                        —{item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
