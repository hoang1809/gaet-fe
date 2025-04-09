import { fetchHomePage } from "@/services/dataService";
import { RootState, store } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchHomePage = () => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["homepage", lang],
    queryFn: fetchHomePage,
  });
};
