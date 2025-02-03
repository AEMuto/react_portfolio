import React, { ReactNode } from "react";
import Footer from "./_Footer";
import Nav from "./_Nav";
import styled from "@emotion/styled";
import ScrollToAnchor from "../ScrollToAnchor";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Nav />
      <StyledMain>
        <ScrollToAnchor />
        {children}
      </StyledMain>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

const StyledMain = styled.main`
  margin-top: 6.4rem;
  min-height: calc(100vh - 12.8rem);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;
