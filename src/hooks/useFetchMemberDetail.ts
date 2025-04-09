import { fetchMembersDetail } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchMemberDetail = (id: string) => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["memberDetail", id, lang],
    queryFn: () => fetchMembersDetail(id),
  });
};
