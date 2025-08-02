"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Cinzel_Decorative, Raleway } from "next/font/google";

// Google fonts
const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Type definition for form data
interface ReservationFormData {
  name: string;
  numberOfGuests: string | number;
  reservationDate: string;
  reservationTime: string;
}

function formatTimeTo12Hour(time24: string): string {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}


const Reservation = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    numberOfGuests: 0,
    reservationDate: "",
    reservationTime: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert and format data
    const processedData = {
      ...formData,
      numberOfGuests:
        typeof formData.numberOfGuests === "string"
          ? parseInt(formData.numberOfGuests, 10)
          : formData.numberOfGuests,
      reservationTime: formatTimeTo12Hour(formData.reservationTime),
    };

    try {
      const res = await axios.post(
        "https://landingpage-backend-fovb.onrender.com/api/v1/reservation",
        processedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        alert("Reservation Successful!");
        setFormData({
          name: "",
          numberOfGuests: "1",
          reservationDate: "",
          reservationTime: "",
        });
      } else {
        alert("Failed to reserve. Please try again.");
      }

    } catch (err: unknown) {
      const errorMessage =
        axios.isAxiosError(err) && err.response
          ? err.response.data.message || err.response.statusText
          : "Something went wrong!";
      console.error("Reservation error:", err);
      alert(` ${errorMessage}`);
    }
  };

  return (
    <section className="mx-auto container py-20 px-4 sm:px-8 lg:px-20 mt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image with border */}
        <div className="relative w-full">
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="border-b border-[#0C0C0C] py-2 focus:outline-none focus:border-black w-full"
              />
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="border-b border-[#0C0C0C] py-2 bg-transparent focus:outline-none focus:border-black w-full"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="reservationDate"
                value={formData.reservationDate}
                onChange={handleChange}
                required
                className="border-b border-[#0C0C0C] py-2 focus:outline-none focus:border-black w-full"
              />
              <input
                type="time"
                name="reservationTime"
                value={formData.reservationTime}
                onChange={handleChange}
                required
                className="border-b border-[#0C0C0C] py-2 focus:outline-none focus:border-black w-full"
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
