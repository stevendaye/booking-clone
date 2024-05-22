import React from "react";
import { Footer, Header, Hero } from "../components";
import { useLocation } from "react-router-dom";
import routes from "../routes";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {pathname !== routes.register &&
        pathname !== routes.signIn &&
        pathname === routes.home && <Hero />}

      <div className="conatainer w-[1125px] mx-auto flex-1 py-4">
        {children}
      </div>

      {pathname !== routes.register &&
        pathname !== routes.signIn &&
        pathname !== routes.listProperty && <Footer />}
    </div>
  );
};

export default Layout;
