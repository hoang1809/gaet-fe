"use client";
import Container from "@/components/common/Container";
import InfoCard from "@/components/common/InfoCard";
import Loading from "@/components/common/Loading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetchGallery } from "@/hooks/useFetchGallery";
import { getStrapiMedia } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";

const GalleryList = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const { isLoading, error, data } = useFetchGallery(
    currentFilter !== "all" ? currentFilter : undefined
  );

  const handleFilterChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value === "all") {
        params.delete("filter");
      } else {
        params.set("filter", value);
      }
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

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
    <Suspense>
      <div className="bg-gaet-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            {t("gallery_title")}
          </h1>
        </div>
      </div>
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <Select value={currentFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("gallery_filter_all")}</SelectItem>
              <SelectItem value="image">{t("gallery_filter_image")}</SelectItem>
              <SelectItem value="video">{t("gallery_filter_video")}</SelectItem>
              <SelectItem value="file">{t("gallery_filter_file")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
    </Suspense>
  );
};

export default GalleryList;
