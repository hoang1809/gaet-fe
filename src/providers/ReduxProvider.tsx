'use client';

import { Provider } from 'react-redux';
import { store } from '@/state/store';
import "../i18n";
import I18nSync from '@/components/I18nSync';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}><I18nSync/>{children}</Provider>;
}
