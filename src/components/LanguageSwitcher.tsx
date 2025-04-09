// src/components/LanguageSwitcher.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/state/languageSlice";
import { RootState, store } from "@/state/store";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();

  const lang = store.getState().language.language;

  return (
    <button
      onClick={() => dispatch(setLanguage(lang === "vi" ? "en" : "vi"))}
      className="flex items-center gap-1 text-white hover:text-gaet-300 transition-colors"
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{lang === "vi" ? "EN" : "VI"}</span>
    </button>
  );
}
