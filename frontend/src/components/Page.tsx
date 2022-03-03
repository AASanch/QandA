import React from "react";
import { PageTitle } from "./PageTitle";

interface PageProps {
  title?: string;
  children: React.ReactNode;
}
export const Page = ({ title, children }: PageProps) => (
  <div>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
