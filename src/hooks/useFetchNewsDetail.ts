import { fetchNewsDetail } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchNewsDetail = (id: string) => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["newsDetail", id, lang],
    queryFn: () => fetchNewsDetail(id),
  });
};
