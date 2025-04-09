import { fetchOrganizationPage } from "@/services/dataService";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useFetchOrganizationPage = () => {
  const lang = useSelector((state: RootState) => state.language.language);
  return useQuery({
    queryKey: ["organization", lang],
    queryFn: fetchOrganizationPage,
  });
};
