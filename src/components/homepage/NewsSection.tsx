"use client";
import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useFetchNews } from "@/hooks/useFetchNews";
import Loading from "../common/Loading";
import InfoCard from "../common/InfoCard";
import { getStrapiMedia } from "@/utils";
import { useTranslation } from "react-i18next";

const NewsSection = () => {
  const { isLoading, error, data } = useFetchNews();
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
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
            {t("homepage_news_and_events")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 header-underline">
            {t("homepage_news")}
          </h2>
        </div>
        <Link
          href="/news"
          className="hidden md:flex items-center text-gaet-600 font-medium hover:text-gaet-800 transition-colors"
        >
          {t("homepage_view_all_news")}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default NewsSection;
