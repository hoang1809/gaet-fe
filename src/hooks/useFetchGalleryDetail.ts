import { fetchGalleryDetail, fetchNewsDetail } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchGalleryDetail = (id: string) => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["galleryDetail", id, lang],
    queryFn: () => fetchGalleryDetail(id),
  });
};
