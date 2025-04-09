import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/getStrapiMedia";
import { useTranslation } from "react-i18next";

type Props = {
  images: Image[];
};

const ImageSection = ({ images }: Props) => {
  const { t } = useTranslation();
  return (
    <div id="gallery" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            <span className="relative inline-block">
              {t('business_activities_image')}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={image.hash}
                className={`rounded-xl overflow-hidden w-full relative shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  index % 3 === 0
                    ? "md:col-span-2 aspect-square md:aspect-[678/381]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={getStrapiMedia(image.url)}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageSection;
