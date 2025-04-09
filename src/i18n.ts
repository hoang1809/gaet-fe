import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locale/resource/en";
import { vi } from "./locale/resource/vi";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
