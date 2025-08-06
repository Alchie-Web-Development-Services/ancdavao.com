import React, { ReactNode } from "react";
import { MyProvider } from "@/context/MyContext";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return <MyProvider>{children}</MyProvider>;
};

export default PrivateLayout;

export const getPrivateLayout = (page: ReactNode) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
