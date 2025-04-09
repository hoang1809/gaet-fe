"use client";
import React from "react";
import Loading from "../common/Loading";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import Container from "../common/Container";
import InfoCard from "../common/InfoCard";
import { getStrapiMedia } from "@/utils/getStrapiMedia";
import { useTranslation } from "react-i18next";
type Props = {
  id: string;
};

const OtherBusiness = ({ id }: Props) => {
  const { isLoading, error, data } = useFetchBusinessArea();
  const {t} = useTranslation();

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
    <Container className="max-w-5xl">
      <h2 id="related" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            <span className="relative inline-block">
              {t('business_related_areas')}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
            </span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.data
          .filter((item) => item.documentId !== id)
          .slice(0, 2)
          .map((item) => (
            <InfoCard
              key={item.documentId}
              title={item.title}
              id={item.documentId}
              image={getStrapiMedia(item.cover.url)}
              description={item.general}
              detailPath="business"
            />
          ))}
      </div>
    </Container>
  );
};

export default OtherBusiness;
