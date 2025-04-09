import { endpoints } from "@/api/apiEndpoints";
import axiosClient from "@/api/axiosClient";
import { BusinessDetail, NewsDetail } from "@/types";
import { About } from "@/types/about.interface";
import { Leadership } from "@/types/leadership.interface";
import { Policy, Terms } from "@/types/policy.interface copy";

export const fetchNews = async (): Promise<{ data: NewsDetail[] }> => {
  const response = await axiosClient.get(endpoints.getNewsList, {
    params: {
      populate: "*",
      sort: "createdAt:desc",
    },
  });
  return response.data;
};

export const fetchNewsDetail = async (
  id: string
): Promise<{ data: NewsDetail }> => {
  const response = await axiosClient.get(endpoints.getNewsDetail(id), {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchMembers = async () => {
  const response = await axiosClient.get(endpoints.getMembers, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchMembersDetail = async (id: string) => {
  const response = await axiosClient.get(endpoints.getMembersDetail(id), {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchBusinessAreas = async (): Promise<{
  data: BusinessDetail[];
}> => {
  const response = await axiosClient.get(endpoints.getBusinessAreas, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchBusinessAreasDetail = async (
  id: string
): Promise<{ data: BusinessDetail }> => {
  const response = await axiosClient.get(endpoints.getBusinessAreasDetail(id), {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchHistoryPage = async (): Promise<{ data: History }> => {
  const response = await axiosClient.get(endpoints.getHistory, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchLeadershipPage = async (): Promise<{ data: Leadership }> => {
  const response = await axiosClient.get(endpoints.getLeadership, {
    params: {
      populate: "leaders.image",
    },
  });
  return response.data;
};

export const fetchOrganizationPage = async (): Promise<{
  data: OrganizationalStructure;
}> => {
  const response = await axiosClient.get(endpoints.getOrganization, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchVisionPage = async (): Promise<{ data: Vision }> => {
  const response = await axiosClient.get(endpoints.getVision, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchHomePage = async (): Promise<{ data: Home }> => {
  const response = await axiosClient.get(endpoints.getHomepage, {
    params: {
      populate: ["video", "partners", "partners.logo", "features"],
    },
  });
  return response.data;
};

export const fetchPolicyPage = async (): Promise<{ data: Policy }> => {
  const response = await axiosClient.get(endpoints.getPolicy, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchTermsPage = async (): Promise<{ data: Terms }> => {
  const response = await axiosClient.get(endpoints.getTerms, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchAbout = async (): Promise<{ data: About }> => {
  const response = await axiosClient.get(endpoints.getAbout, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

export const fetchPartners = async (): Promise<{ data: Partner[] }> => {
  const response = await axiosClient.get(endpoints.getPartners, {
    params: {
      populate: "*",
    },
  });
  return response.data;
};

