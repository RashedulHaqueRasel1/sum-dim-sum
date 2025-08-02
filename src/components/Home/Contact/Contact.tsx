import Image from "next/image";
import React from "react";
import { Cinzel_Decorative, Poppins } from "next/font/google";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export default function ContactForm() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="flex md:flex-row w-[1320px] h-[746px] bg-white rounded-2xl overflow-hidden shadow-lg mx-auto">
                {/* Left Side - Form */}
                <div className="relative w-full md:w-2/3">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/contact_bg1.png"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className="relative z-20 p-16 mt-20   h-full  ">
                        <h2 className="text-white text-2xl font-semibold mb-2">Just Say Hi !</h2>
                        <p className="text-white mb-8">
                            Tell us more about you and we&apos;ll contact you soon.
                        </p>
                        <form className="space-y-8">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                            />
                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full sm:w-1/2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full sm:w-1/2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                                />
                            </div>
                            <textarea
                                placeholder="Type your message here"
                                className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-6 resize-none"
                                rows={1}
                            ></textarea>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md transition duration-200"
                                >
                                    Submit →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className="relative w-full md:w-1/3 bg-[#F7E7E8] flex flex-col items-center text-left px-10 pt-20 pb-6">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <Image
                            src="/contact_bg2.png"
                            alt="contact_bg2"
                            layout="fill"
                        />
                    </div>

 
                    <div className="relative z-10 w-full h-full flex flex-col justify-center ">
                        <div className="text-left">
                            <h3 className={`${poppins.className} text-2xl font-semibold mb-4 text-[#0C0C0C]`}>Contact Information</h3>
                            <p className="text-[16px] mb-1 text-[#0C0C0C]">Maui, Hawaii, USA</p>
                            <p className="text-[16px] mb-1 text-[#0C0C0C]">Call us:  +1234567890 </p>
                            <p className="text-[16px] mb-6 text-[#0C0C0C]">Whatsapp:  +1234567890 </p>

                            <h4 className={`${poppins.className} text-2xl text-[#0C0C0C] font-semibold mb-2`}>Follow Us</h4>
                            <div className="flex space-x-4 text-xl my-4">
                                <FaFacebookF className="text-[#0C0C0C] opacity-80 text-xl"/>
                                <FaLinkedinIn className="text-[#0C0C0C] opacity-80 text-xl"/>
                                <FaXTwitter className="text-[#0C0C0C] opacity-80 text-xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 text-center ml-20">
                        <p className={`${cinzel.className} font-medium text-gray-600 text-lg`}>Contact Us</p>
                    </div>
                </div>

            </div>
        </div>
    );
}