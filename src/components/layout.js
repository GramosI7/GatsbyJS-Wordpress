import React from "react";
import MainMenu from "./MainMenu";

import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
  </div>
)

export default Layout
