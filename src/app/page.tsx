"use client";
import Loading from "@/components/common/Loading";
import AboutSection from "@/components/homepage/AboutSection";
import BusinessSection from "@/components/homepage/BusinessSection";
import HeroSection from "@/components/homepage/HeroSection";
import NewsSection from "@/components/homepage/NewsSection";
import PartnerSection from "@/components/homepage/PartnerSection";
import { useFetchHomePage } from "@/hooks/useFetchHomePage";

export default function Home() {
  const { isLoading, error, data } = useFetchHomePage();

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
      <HeroSection videoUrl={data.data.video.url} />
      <AboutSection description={data.data.description} features={data.data.features}/>
      <BusinessSection description={data.data.business_description}/>
      <PartnerSection description={data.data.partner_description}/>
      <NewsSection/>
    </>
  );
}
