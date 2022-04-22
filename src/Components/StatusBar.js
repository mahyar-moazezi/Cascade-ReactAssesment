import React from "react";
import { useRecoilValue } from "recoil";
import { statementState } from "../Store/Atom";
import { Descriptions } from "antd";
const StatusBar = () => {
  const [statement] = useRecoilValue(statementState); // statementState is an atom
  const availableBalance = statement.Statement.Transactions[0].AvailableBalance;
  const stBalanceCalc = statement.Statement.Transactions.map((i) => i.Amount).reduce(
    (a, b) => a + b,
    0
  );
  const startingBalance = availableBalance - stBalanceCalc.toFixed(2);
  const endBalanceCalc = statement.Statement.Transactions.filter(
    (i) => i.Billed === true
  )[0].Amount;
  const endingBalance = availableBalance - endBalanceCalc;
  return (
    <div className="statusbar">
      <Descriptions title="Your Status" bordered style={{ padding: "2px 10px" }}>
        <Descriptions.Item label="Available Balance">
          ${availableBalance}
        </Descriptions.Item>
        <Descriptions.Item label="Starting Balance">
          ${startingBalance}
        </Descriptions.Item>
        <Descriptions.Item label="Ending Balance">
          ${endingBalance}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default StatusBar;
