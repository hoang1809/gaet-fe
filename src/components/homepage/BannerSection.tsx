import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { getStrapiMedia } from "@/utils";

type Props = {
  banners: Banner[];
};

const BannerSection = ({ banners }: Props) => {
  return (
    <div className="bg-white">
      <Container>
        <div className="grid grid-cols-4 md:col-span-2 lg:col-span-1 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={getStrapiMedia(banner.image.url)}
                fill
                alt=""
                objectFit="fill"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
