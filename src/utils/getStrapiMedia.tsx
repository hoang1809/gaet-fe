import { API_URL } from "@/constant/app"


export function getStrapiMedia(url?: string) {
  if (url && url.startsWith("/")) {
    return `${API_URL}${url}`
  }
  return '/'
}
