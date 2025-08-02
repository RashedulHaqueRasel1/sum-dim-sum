"use client";

import Image from "next/image";
import { Cinzel_Decorative, Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Reservation = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image with border */}
        <div className="relative w-full max-w-[534px] mx-auto">
          <div className="absolute -top-5 -left-6 w-full h-full rounded-xl border-2 border-[#B31217]/50 z-0"></div>
          <div className="relative rounded-xl overflow-hidden bg-black z-10">
            <Image
              src="/ourStory-rideSide.jpg"
              alt="Sum Dim Sum"
              width={534}
              height={514}
              className="w-[534px] h-[514]"
            />
          </div>
        </div>

        {/* Right side: Form */}
        <div className="w-full max-w-5xl">
          <h2
            className={`${cinzel.className} text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-[#0C0C0C] leading-snug`}
          >
            Reserve Your Table for an Authentic Sum Dim Sum Experience
          </h2>

          <p
            className={`${raleway.className} text-sm sm:text-base text-[#0C0C0C] mb-8 font-normal leading-relaxed`}
          >
            Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere. Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes and impeccable service make every moment memorable. Reserve your table now and let us take you on a culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable dining experience awaits!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-gray-400 py-2 focus:outline-none focus:border-black w-full"
              />
              <select className="border-b border-gray-400 py-2 bg-transparent focus:outline-none focus:border-black w-full">
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="border-b border-gray-400 py-2 focus:outline-none focus:border-black w-full"
              />
              <input
                type="time"
                className="border-b border-gray-400 py-2 focus:outline-none focus:border-black w-full"
              />
            </div>

            <div className="flex lg:justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-[#B31217] text-[#F8F8FF] px-5 py-[10px] rounded-xl font-semibold text-[16px] w-[212px] h-[48px] flex items-center justify-center gap-2 mt-6 leading-none cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
