import { Button } from "@blueprintjs/core";
import { FC } from "react";
import * as classes from "./SubsContainer.style";

export const SubsContainer: FC = () => {
  return (
    <div className={classes.subsContainer}>
      <Button alignText="left" className={classes.subsBtn} minimal>
        <span
          style={{
            paddingLeft: "10px",
            float: "left",
          }}
          className={classes.btnSpan}
        >
          Netflix
        </span>
        <span
          style={{
            paddingRight: "70px",
          }}
          className={classes.btnSpan}
        >
          15 aug
        </span>
        <span
          style={{
            float: "right",
          }}
          className={classes.btnSpan}
        >
          15$
        </span>
      </Button>
    </div>
  );
};
