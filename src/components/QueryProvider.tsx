"use client";

import { queryClient } from "@/config/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

export default function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>
  );
}