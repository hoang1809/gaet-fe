import React from "react";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
  subtitle?: string;
};

const HeroSection = ({ url, title, subtitle }: Props) => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <Image src={url} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-end justify-center pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-white/80 animate-fade-in">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
