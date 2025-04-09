import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn(`container mx-auto py-16 px-4 space-y-6 ${className}`)}>
      {children}
    </div>
  );
};

export default Container;
