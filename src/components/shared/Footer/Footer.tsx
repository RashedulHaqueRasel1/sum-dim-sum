import {
    Phone,
    MapPin,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    X as TwitterX,
} from "lucide-react";
import Image from "next/image";
import { Cinzel_Decorative, } from "next/font/google";

// Google fonts
const cinzel = Cinzel_Decorative({
    weight: ["400", "700"],
    subsets: ["latin"],
});



const Footer = () => {
    return (
        <footer className="mt-16  text-sm text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-0  border-t border-b border-[#B31217] py-10">

                {/* Contact Info */}
                <div className="flex flex-col gap-4 items-start">
                    <h3 className={`${cinzel.className} font-bold uppercase text-2xl text-[#000000]`}>Contact</h3>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+1234567890</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Your Address Here</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>example@example.com</span>
                    </div>
                </div>

                {/* Logo + Social Icons */}
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src="/Footer-Logo.png"
                        alt="Sum Dim Sum Logo"
                        width={170}
                        height={40}
                        className="object-contain"
                    />
                    <div className="flex items-center gap-6 mt-4 text-black">
                        <a href="#" aria-label="Facebook" className="hover:text-red-600 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-red-600 transition">
                            <Instagram size={24} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-red-600 transition">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-red-600 transition">
                            <TwitterX size={24} />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-end gap-3 text-right">
                    <a href="#" className="hover:text-red-600">Home</a>
                    <a href="#" className="hover:text-red-600">About Us</a>
                    <a href="#" className="hover:text-red-600">Privacy Policy</a>
                    <a href="#" className="hover:text-red-600">Terms & Conditions</a>
                </div>

            </div>

            {/* Thin red line above copyright */}
            <div className=" my-4 text-center text-xs ">
                Copyright 2024 &copy;  SumDimSum
            </div>
        </footer>
    );
};

export default Footer;
