import { Button } from "@blueprintjs/core";
import React, { FC } from "react";

export const EnterPage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button text="Enter by Google" />
    </div>
  );
};
