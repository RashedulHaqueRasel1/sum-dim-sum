import Title from "@/components/ui/title";
import Image from "next/image";
import { Raleway } from "next/font/google";


const raleway = Raleway({
    weight: ["400", "500", "600","700"],
    subsets: ["latin"],
});


const foodItems = [
  {
    title: "Wolfberry with Mushroom Siew Mai 枸杞子烧卖",
    desc: "A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.",
    image: "/food_1.png",
  },
  {
    title: "Steamed Seafood Platter",
    desc: "A medley of ocean flavors steamed to perfection with herbs and spices.",
    image: "/food_2.jpg",
  },
  {
    title: "Crispy Soft-Shell Crab",
    desc: "Delicious deep-fried crab served on a bed of crispy noodles.",
    image: "/food_3.jpg",
  },
  {
    title: "Salted Egg Prawns",
    desc: "Juicy prawns coated in savory salted egg yolk sauce.",
    image: "/food_4.jpg",
  },
];

const TasteTheTradition = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <Title text="Taste The Tradition" imgSrc="/objects.png" />

      <div className="grid grid-cols-6 gap-6 mt-10">
        {foodItems.map((item, index) => {
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? "md:col-span-4" : "md:col-span-2";

          return (
            <div
              key={index}
              className={`relative col-span-6 ${colSpan} h-80 group rounded-xl overflow-hidden cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm   px-5 py-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div className="w-full sm:w-2/3">
                  <h2 className={`${raleway.className} text-[#F8F8FF] text-base sm:text-lg font-semibold`}>
                    {item.title}
                  </h2>
                  <p className={`text-[#F8F8FF] text-xs sm:text-sm mt-1 opacity-90`}>
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-0">
                  <button className="px-4 py-2 bg-transparent border border-white text-white rounded text-xs sm:text-sm hover:bg-white hover:text-black transition">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasteTheTradition;
