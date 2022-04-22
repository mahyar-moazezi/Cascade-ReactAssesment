import React, { useState } from "react";
import { Card, Avatar } from "antd";
import {
  EyeOutlined,
} from "@ant-design/icons";
import { TransactionDetails } from "./TransactionDetails";

export const Transaction = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { transaction } = props;
  const { Meta } = Card;
  const billed = <h3 style={{ textAlign: "center", color: "green" }}>Billed</h3>;
  const notSettled = (
    <h3 style={{ textAlign: "center", color: "blue" }}>Not Settled</h3>
  );
  const transactionInfo = (
    <>
      <div style={{ color: "black" }}>
        <span>Amount : ${transaction.Amount}</span>
        <br />
        <span>Description : {transaction.Description}</span>
        <br />
        <span>Merchant Name : {transaction.MerchantName}</span>
      </div>
    </>
  );
  return (
    <>
      <Card
        style={{ width: 400 }}
        cover={transaction.Billed ? billed : notSettled}
        actions={[
          <EyeOutlined key="details" onClick={() => setIsModalVisible(true)} />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          description={transactionInfo}
        />
      </Card>
      <TransactionDetails
        isModalVisible={isModalVisible}
        onCancelModal={() => setIsModalVisible(false)}
        transaction={transaction}
      />
    </>
  );
};
