import { Button, Card } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { FC } from "react";
import * as classes from "./SubsContainer.style";

interface ISubsContainer {
  service: string;
  date: string;
  price: number;
}

export const SubsContainer: FC<ISubsContainer> = (props) => {
  const { service, date, price }: ISubsContainer = {
    ...defaultValues,
    ...props,
  };

  return (
    <div className={classes.subsContainer}>
      <Popover2
        content={<Card>Hello</Card>}
        interactionKind="click"
        placement="bottom"
        renderTarget={({ isOpen, ref, ...targetProps }) => (
          <Button
            minimal
            alignText="left"
            elementRef={ref}
            {...targetProps}
            className={classes.subsBtn}
          >
            <span
              style={{
                paddingLeft: "10px",
                float: "left",
              }}
              className={classes.btnSpan}
            >
              {service}
            </span>
            <span
              style={{
                paddingRight: "70px",
              }}
              className={classes.btnSpan}
            >
              {date}
            </span>
            <span
              style={{
                float: "right",
              }}
              className={classes.btnSpan}
            >
              {price}$
            </span>
          </Button>
        )}
      />
    </div>
  );
};

const defaultValues: Required<ISubsContainer> = {
  price: 0,
  date: "",
  service: "",
};
