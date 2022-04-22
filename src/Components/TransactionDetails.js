import React from "react";
import { Modal, Button } from "antd";
export const TransactionDetails = (props) => {
  const { isModalVisible, onCancelModal, transaction } = props;

  return (
    <div>
      <Modal
        title="Transaction Details"
        visible={isModalVisible}
        onCancel={onCancelModal}
        footer={[
          <Button key="close" onClick={onCancelModal}>
            Close
          </Button>,
        ]}
      >
        <p>Transaction Date: {transaction.TransactionDate}</p>
        <p>Business Date: {transaction.BusinessDate}</p>
        <p>Amount: ${transaction.Amount}</p>
        <p>Description: {transaction.Description}</p>
        <p>Merchant Name: {transaction.MerchantName}</p>
      </Modal>
    </div>
  );
};
