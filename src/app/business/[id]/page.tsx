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
        url={getStrapiMedia(data.data.cover.url)}
        title={data.data.title}
        subtitle={data.data.subtitle}
      />

      <OverviewSection general={data.data.general} />

      <ActivitiesSection layout={data.data.activities_layout} activities={data.data.activities} commitment={data.data.commitment}/>

      <ImageSection images={data.data.images}/>

      <OtherBusiness id={data.data.documentId}/>

      <ContactSection/>
    </>
  );
};

export default BusinessDetailPage;
