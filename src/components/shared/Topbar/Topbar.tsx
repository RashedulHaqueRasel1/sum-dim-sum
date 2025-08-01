import Image from "next/image";
import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Topbar = () => {
    return (
        <div className="bg-[#0C0C0C] blur-opacity-20 py-2 px-4">

            <div className="mx-auto container flex flex-col md:flex-row justify-between items-center text-sm text-[#F8F8FF]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-2 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <Image src="/location.png" alt="Location Icon" width={16} height={16} />
                        <span className={`${raleway.className} text-xs sm:text-sm`}>Your Address Here</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image src="/phone.png" alt="Phone Icon" width={16} height={16} />
                        <span className={`${poppins.className} text-xs sm:text-sm`}>+1234567890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image src="/email.png" alt="Email Icon" width={16} height={16} />
                        <span className={`${raleway.className} text-xs sm:text-sm`}>example@example.com</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Image src="/facebook.png" alt="Facebook Icon" width={16} height={16} className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Image src="/instagram.png" alt="Instagram Icon" width={16} height={16} className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Image src="/linkedin.png" alt="LinkedIn Icon" width={16} height={16} className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Image src="/twitter.png" alt="Twitter Icon" width={16} height={16} className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>

            </div>
        </div>
    );
};

export default Topbar;