import { fetchBusinessAreas } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchBusinessArea = () => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["businessAreas", lang],
    queryFn: fetchBusinessAreas,
  });
};
