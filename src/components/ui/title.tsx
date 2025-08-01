// components/SectionTitle.tsx

import React from "react";
import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type SectionTitleProps = {
  text: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
};

const Title = ({
  text,
  imgSrc,
  imgAlt = "Section image",
  imgWidth = 117,
  imgHeight = 48,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4 ${className}`}>
      <h1 className={`${cinzel.className} text-[#0C0C0C] font-bold text-5xl mb-3`}>
        {text}
      </h1>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className="object-contain rounded-md"
      />
    </div>
  );
};

export default Title;
