"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchAbout } from "@/hooks/useFetchAbout";
import { useFetchOrganizationPage } from "@/hooks/useFetchOrganizationPage";
import { getStrapiMedia } from "@/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const AboutPage = () => {
  const { isLoading, error, data } = useFetchAbout();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="bg-gaet-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            {t("about_introduction")}
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-gaet-700 mb-6">
                {t("business_overview")}
              </h2>
              <p className="text-lg">{data.data.overview}</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
              <img
                src={getStrapiMedia(data.data.image?.url)}
                alt={t("about_gaet_headquarters")}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {t("about_headquarters")}
                </h3>
                <p className="text-gray-600">{data.data.address}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="px-4 sm:px-6 lg:px-8 py-0 max-w-4xl">
      <BlocksRenderer
        content={data.data.details}
        blocks={{
          image: ({ image }) => {
            return (
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image src={image.url} fill alt="" objectFit="cover" />
              </div>
            );
          },
          paragraph: ({ children }) => {
            return <p className="text-lg">{children}</p>;
          },
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1>{children}</h1>
              case 2:
                return <h2 className="text-2xl font-bold text-gaet-700">{children}</h2>
              case 3:
                return <h3 className="text-xl font-bold text-gaet-700">{children}</h3>
              default:
                return <h1>{children}</h1>
            }}
        }}
      />
      </Container>
    </>
  );
};

export default AboutPage;
