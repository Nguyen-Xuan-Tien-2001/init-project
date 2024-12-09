import { theme } from "antd";
import React from "react";

export const HomeContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 24,
        textAlign: "center",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      HomeContent
    </div>
  );
};
