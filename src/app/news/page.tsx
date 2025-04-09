"use client";
import InfoCard from "@/components/common/InfoCard";
import Loading from "@/components/common/Loading";
import Container from "@/components/common/Container";
import { useFetchNews } from "@/hooks/useFetchNews";
import { getStrapiMedia } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
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
            Tin tức & Sự kiện
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
              tag={item.tags[0]?.name}
              createdAt={item.createdAt}
              image={getStrapiMedia(item.cover.url)}
              description={item.description}
              detailPath="news"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default NewsPage;
