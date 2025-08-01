// components/CtaButton.tsx
import { ArrowRight } from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface CtaButtonProps {
  label: string;
}

const Button = ({ label }: CtaButtonProps) => {
  return (
    <button
      className={`${raleway.className} bg-[#B31217] text-[#F8F8FF] px-6 py-[10px] rounded-xl font-semibold text-[16px] w-[212px] h-[48px] flex items-center justify-center gap-2 mt-6 leading-none cursor-pointer`}
    >
      {label}
      <ArrowRight className="w-[18px] h-[18px]" />
    </button>
  );
};

export default Button;
