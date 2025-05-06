import { fetchGallery } from "@/services/dataService";
import { useQuery } from "@tanstack/react-query";

export const useFetchGallery = (filter?:string) => {
    return useQuery({
      queryKey: ['gallery', filter],
      queryFn: () => fetchGallery(filter),
    });
  };