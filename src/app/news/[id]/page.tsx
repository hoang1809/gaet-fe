"use client";
import React, { use } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import dayjs from "dayjs";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { useFetchNewsDetail } from "@/hooks/useFetchNewsDetail";
import Link from "next/link";
import Loading from "@/components/common/Loading";
import { useTranslation } from "react-i18next";

type Props = {
  params: Promise<{ id: string }>;
};

const NewsDetailPage = ({ params }: Props) => {
  const {t} = useTranslation();
  const { id } = use(params);

  const { isLoading, error, data } = useFetchNewsDetail(id);

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
    <Container className="max-w-4xl">
      <Link href="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('business_back_to_home')}
        </Button>
      </Link>
      <div className="text-3xl md:text-4xl font-bold">{data.data.attributes.title}</div>
      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {dayjs(data.data.attributes.createdAt).format("DD/MM/YYYY")}
        </div>
        <div className="flex items-center">
          <Tag className="h-4 w-4 mr-1" />
          {data.data.attributes.tags.data.map((tag) => tag.attributes.name).join("; ")}
        </div>
      </div>
      <BlocksRenderer
        content={data.data.attributes.content}
        blocks={{
          image: ({ image }) => {
            return (
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image src={image.url} fill alt="" objectFit="cover" />
              </div>
            );
          },
          paragraph: ({ children }) => {
            return <p className="text-lg text-justify">{children}</p>;
          },
        }}
      />
    </Container>
  );
};

export default NewsDetailPage;
