import React from "react";
import { useRecoilValue } from "recoil";
import StatusBar from "../Components/StatusBar";
import Transactions from "../Components/Transactions";
import { statementState } from "../Store/Atom";
const Content = () => {
  const [statement] = useRecoilValue(statementState);

  console.log(statement);
  return (
    <div className="body-container">
      <StatusBar />
      <Transactions />
    </div>
  );
};

export default Content;
