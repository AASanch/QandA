import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => <h2>{children}</h2>;
