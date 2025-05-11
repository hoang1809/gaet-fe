"use client";
import ActivitiesSection from "@/components/business/ActivitiesSection";
import ContactSection from "@/components/business/ContactSection";
import HeroSection from "@/components/business/HeroSection";
import ImageSection from "@/components/business/ImageSection";
import OtherBusiness from "@/components/business/OtherBusiness";
import OverviewSection from "@/components/business/OverviewSection";
import Loading from "@/components/common/Loading";
import { useFetchBussinessAreaDetail } from "@/hooks/useFetchBussinessAreaDetail";
import { getStrapiMedia } from "@/utils";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const BusinessDetailPage = ({ params }: Props) => {
  const { id } = use(params);

  const { isLoading, error, data } = useFetchBussinessAreaDetail(id);

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
      <HeroSection
        url={getStrapiMedia(data.data.attributes.cover.data.attributes.url)}
        title={data.data.attributes.title}
        subtitle={data.data.attributes.subtitle}
      />

      <OverviewSection general={data.data.attributes.general} />

      <ActivitiesSection
        layout={data.data.attributes.activities_layout}
        activities={data.data.attributes.activities}
        commitment={data.data.attributes.commitment}
      />

      <ImageSection images={data.data.attributes.images.data} />

      <OtherBusiness id={data.data.id} />

      <ContactSection />
    </>
  );
};

export default BusinessDetailPage;
