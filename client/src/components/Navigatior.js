import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tabs = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
`;
const Tab = styled.div`
  padding: 10px;
`;
const NextButton = styled.div`
  font-size: 1em;
  font-weight: 400;
`;

function Navigatior(props) {
  return (
    <Tabs>
      <Tab>
        <Link to="/about">
          <NextButton>about</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/ballpit">
          <NextButton>ballpit</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/characterani">
          <NextButton>characterani</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/earthicons">
          <NextButton>earthicons</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/intro">
          <NextButton>intro</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/product">
          <NextButton>product</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/ragdoll">
          <NextButton>ragdoll</NextButton>
        </Link>
      </Tab>
      <Tab>
        <Link to="/gameapp">
          <NextButton>gameapp</NextButton>
        </Link>
      </Tab>
    </Tabs>
  );
}

export default Navigatior;
