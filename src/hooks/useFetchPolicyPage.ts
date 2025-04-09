import { fetchPolicyPage } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchPolicyPage = () => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["policy", lang],
    queryFn: fetchPolicyPage,
  });
};
