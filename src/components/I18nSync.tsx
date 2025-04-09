// src/components/I18nSync.tsx
'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from '@/i18n';
import { RootState } from '@/state/store';

export default function I18nSync() {
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return null;
}
