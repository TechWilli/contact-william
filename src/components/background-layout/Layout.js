import React from "react";
import styled from "styled-components";

const BackgroundLayout = styled.div`
  width: 100vw;
	height: 100vh;
	position: fixed;
`;

const TopColor = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${props => props.theme.colors.topLayoutColor};
`;

const BottomColor = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${props => props.theme.colors.bottomLayoutColor};
`;

const Layout = () => {
  return (
    <BackgroundLayout>
      <TopColor />
      <BottomColor />
    </BackgroundLayout>
  );
};

export default Layout;
