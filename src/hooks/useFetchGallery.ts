import { fetchGallery } from "@/services/dataService";
import { useQuery } from "@tanstack/react-query";

export const useFetchGallery = () => {
    return useQuery({
      queryKey: ['gallery'],
      queryFn: fetchGallery,
    });
  };