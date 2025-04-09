import { getStrapiMedia } from "@/utils/getStrapiMedia";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = {
  videoUrl?: string;
};

const HeroSection = ({ videoUrl }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full lg:h-screen object-cover brightness-50 "
        poster="/assets/images/hero-poster.jpg"
      >
        <source
          src={
            videoUrl
              ? getStrapiMedia(videoUrl)
              : "/assets/videos/gaet-hero-video.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="text-white bg-gaet-500/80 backdrop-blur-sm text-lg font-bold px-5 py-2.5 rounded-full">
              {t("homepage_company_name")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-down animate-delay-100">
            {t("homepage_slogan")}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-300">
            {t("homepage_description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-500">
            <a
              href="/about"
              className="btn-primary flex items-center justify-center gap-2"
            >
              {t("homepage_learn_more")}
              <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn-secondary text-gaet-100 hover:border-gaet-700 hover:text-gaet-700 border-gaet-100"
            >
              {t("homepage_contact_now")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Scroll Down"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M7 13L13 7M7 13L1 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
