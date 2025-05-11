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
import { useFetchGalleryDetail } from "@/hooks/useFetchGalleryDetail";
import { getStrapiMedia } from "@/utils";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

type Props = {
  params: Promise<{ id: string }>;
};

const GalleryDetailPage = ({ params }: Props) => {
  const { t } = useTranslation();
  const { id } = use(params);

  const { isLoading, error, data } = useFetchGalleryDetail(id);

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
          {t("business_back_to_home")}
        </Button>
      </Link>
      <div className="text-3xl md:text-4xl font-bold">{data.data.attributes.title}</div>
      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {dayjs(data.data.attributes.createdAt).format("DD/MM/YYYY")}
        </div>
        {data.data.attributes.media.data.map((item) => {
          if (data.data.attributes.type === "image") {
            const image = item as unknown as Image;
            return (
              <img
                key={image.attributes.hash}
                src={getStrapiMedia(image.attributes.url)}
                alt={data.data.attributes.title}
                className="w-full h-auto"
              />
            );
          } else if (data.data.attributes.type === "video") {
            const video = item as unknown as Video;
            return (
              <video key={video.id} controls className="w-full h-auto">
                <source src={getStrapiMedia(video.attributes.url)} />
                Your browser does not support the video tag.
              </video>
            );
          } else if (data.data.attributes.type === "file") {
            const docs = [{uri: getStrapiMedia(item.attributes.url)}];
            // data.data.media.map((item) => {
            //   return {
            //     uri: getStrapiMedia(item.url),
            //   }})
            return <DocViewer key={item.id} documents={docs} pluginRenderers={DocViewerRenderers} />;
          }
        })}
      </div>
    </Container>
  );
};

export default GalleryDetailPage;
