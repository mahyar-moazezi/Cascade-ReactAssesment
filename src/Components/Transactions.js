import { Row } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { statementState } from "../Store/Atom";
import { Transaction } from "./Transaction";

const Transactions = () => {
  const [statement] = useRecoilValue(statementState);
  const transactions = statement.Statement.Transactions;
  return (
    <>
      <Row justify="space-around" style={{ margin: " 20px 0 " }}>
        {transactions.map((i) => (
          <Transaction transaction={i} />
        ))}
      </Row>
    </>
  );
};

export default Transactions;
