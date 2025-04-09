import { fetchMembers } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchMembers = () => {
    const lang = useSelector((state: RootState) => state.language.language);
    return useQuery({
      queryKey: ['members', lang],
      queryFn: fetchMembers,
    });
  };