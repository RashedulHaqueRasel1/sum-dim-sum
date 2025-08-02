import Image from "next/image";
import Button from "@/components/ui/button";
import { Cinzel_Decorative, Raleway } from "next/font/google";

// Google fonts
const cinzel = Cinzel_Decorative({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const raleway = Raleway({
    weight: ["400", "500", "600","700"],
    subsets: ["latin"],
});

const OurStory = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-6">
            {/* Wrapper with background image */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Layered Background Images */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute left-0 top-20 w-[1096px] h-[389px] hidden lg:flex">
                        <Image
                            src="/Rectangle-400.png"
                            alt="Cherry Blossom Background"
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <div className="absolute left-92 top-40 w-[474px] h-[286px] hidden lg:flex">
                        <Image
                            src="/ourStory-background.png"
                            alt="Cherry Blossom Overlay"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left mt-10 lg:ml-14">
                        <h2
                            className={`${cinzel.className} text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0C0C0C] mb-6`}
                        >
                            Our Story
                        </h2>

                        <p
                            className={`${raleway.className} text-base sm:text-lg text-[#0C0C0C]  mb-8  `}
                        >
                            At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.
                        </p>

                        <Button label="Learn More" />
                    </div>

                    {/* Side Image with Border */}
                    <div className="flex-1 w-full max-w-md relative mt-20 lg:mt-32">
                        <div className="relative">
                            <div className="absolute -top-6 -right-7 w-full h-full border-2 border-red-400 rounded-xl z-0" />
                            <Image
                                src="/ourStory-rideSide.jpg"
                                alt="Dim Sum Table"
                                width={512}
                                height={400}
                                className="relative w-[512px] h-[400px] object-cover rounded-xl shadow-xl z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 text-center">
                    {[
                        { img: "/Layer_1.png", value: "6,000+", label: "Happy Guests" },
                        { img: "/Layer_2.png", value: "50+", label: "Unique Dishes" },
                        { img: "/Layer_3.png", value: "20+", label: "Years Of Quality" },
                        { img: "/Layer_4.png", value: "12+", label: "Monthly Events" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <div className="relative w-16 h-16">
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className={`${cinzel.className} text-4xl font-semibold text-[#0C0C0C] mt-5`}>{item.value}</h3>
                            <p className={ `${raleway.className} text-[18px] text-[#0C0C0C] font-medium mt-1`}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStory;