import { fetchBusinessAreasDetail } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchBussinessAreaDetail = (id: string) => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["bussinessAreaDetail", id, lang],
    queryFn: () => fetchBusinessAreasDetail(id),
  });
};
