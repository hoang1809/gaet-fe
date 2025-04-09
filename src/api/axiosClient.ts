// src/lib/axiosClient.ts
import { API_URL } from "@/constant/app";
import axios from "axios";
import { store } from "@/state/store";

const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const lang = store.getState().language.language;

  config.params = config.params || {};

  if (!config.params.locale && lang !== 'vi') {
    config.params.locale = lang;
  }

  return config;
});

export default axiosClient;
