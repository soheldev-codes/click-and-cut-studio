"use client";

import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ToastProvider from "./ToastProvider";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
}