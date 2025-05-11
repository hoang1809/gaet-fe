"use client";
import React from "react";
import Container from "../common/Container";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import Loading from "../common/Loading";
import InfoCard from "../common/InfoCard";
import { getStrapiMedia } from "@/utils/getStrapiMedia";
import { useTranslation } from "react-i18next";

type Props = {
  description: string;
};
const BusinessSection = ({ description }: Props) => {
  const { isLoading, error, data } = useFetchBusinessArea();
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
    <Container>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gaet-700">
          {t("homepage_business_area")}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.data.map((item) => (
          <InfoCard
            key={item.id}
            title={item.attributes.title}
            image={getStrapiMedia(item.attributes.cover.data.attributes.url)}
            description={item.attributes.general}
            url={`/business/${item.id}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default BusinessSection;
