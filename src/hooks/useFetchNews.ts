import { fetchNews } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchNews = () => {
    const lang = useSelector((state: RootState) => state.language.language);
    return useQuery({
      queryKey: ['news', lang],
      queryFn: fetchNews,
    });
  };