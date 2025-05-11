"use client";
import Container from "@/components/common/Container";
import InfoCard from "@/components/common/InfoCard";
import Loading from "@/components/common/Loading";
import { useFetchNews } from "@/hooks/useFetchNews";
import { getStrapiMedia } from "@/utils";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const { t } = useTranslation();

  const { isLoading, error, data } = useFetchNews();

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
            {t("header_news")}
          </h1>
        </div>
      </div>
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((item) => (
            <InfoCard
              key={item.id}
              title={item.attributes.title}
              tag={item.attributes.tags.data[0]?.attributes.name}
              createdAt={item.attributes.createdAt}
              image={getStrapiMedia(item.attributes.cover.data.attributes.url)}
              description={item.attributes.description}
              url={`/news/${item.id}`}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default NewsPage;
