"use client";
import Container from "@/components/common/Container";
import InfoCard from "@/components/common/InfoCard";
import Loading from "@/components/common/Loading";
import { useFetchGallery } from "@/hooks/useFetchGallery";
import { getStrapiMedia } from "@/utils";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const {t} = useTranslation();
  const { isLoading, error, data } = useFetchGallery();

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
            {t('gallery_title')}
          </h1>
        </div>
      </div>
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((item) => (
            <InfoCard
              key={item.documentId}
              title={item.title}
              id={item.documentId}
              createdAt={item.createdAt}
              image={getStrapiMedia(item.cover.url)}
              detailPath="gallery"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default NewsPage;
