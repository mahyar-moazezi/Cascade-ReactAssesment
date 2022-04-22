import React from "react";
import Content from "../Content/Content";
import Header from "../Layout/Header";
import { RecoilRoot } from "recoil";
const Container = () => {
  return (
    <>
      <Header />
      <RecoilRoot>
        <Content />
      </RecoilRoot>
    </>
  );
};

export default Container;
