"use client";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
`;

const StyledH2 = styled.h2`
  font-size: 40px;
`;

const StyledH3 = styled.h3`
  font-size: 20px;
`;

export default function Home() {

  return (
    <>
      <title>Home</title>
      <StyledDiv>
        <StyledH1>Hello, welcome to my Holiday Api website</StyledH1>
        <StyledH2>Please visit a link at the navigation at the top to</StyledH2>
        <StyledH2>see different holidays occuring on other popular holidays</StyledH2>
        <StyledH3>Note: Sometimes the nextjs will remove the data for some reason after it has loaded,</StyledH3>
        <StyledH3>please just refresh if you do not see any holidays</StyledH3>
      </StyledDiv>
    </>
  );
}

