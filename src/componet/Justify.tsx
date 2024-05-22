import { Flex } from "antd";
import React from "react";

export const Justify = ({
  left,
  right,
}: {
  left?: React.ReactNode;
  right?: React.ReactNode;
}) => {
  return (
    <Flex gap="middle" justify="space-between">
      <div style={{ flex: "1" }}>{left}</div>
      <div>{right}</div>
    </Flex>
  );
};
