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

axiosClient.interceptors.response.use((res) => {
  return res
}, (error) => { 

  const params = error.config.params || {}

  if (error.config.method ==='get'&&error.status === 404 && params.locale && params.final !== 'true') {
    const newLocale = params.locale === 'en' ? 'vi' : 'en';
    const newResponse = axiosClient.get(error.config.url!, {
      params: {
        ...params,
        locale: newLocale,
        final: 'true',
      },
      headers: {
        ...error.config.headers,
      },
    });
    return newResponse
  }

  return error;
}
)
  

export default axiosClient;
