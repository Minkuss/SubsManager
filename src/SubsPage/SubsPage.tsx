import { Button, Divider, Icon, InputGroup, Label } from "@blueprintjs/core";
import React, { FC } from "react";
import { SubsContainer } from "../SubsContainer";
import * as classes from "./SubsPage.style";

interface ISubsPage {
  screenName: string;
}

export const SubsPage: FC<ISubsPage> = (props) => {
  const { screenName }: ISubsPage = { ...defaultValues, ...props };

  return (
    <div className={classes.subsBody}>
      {/* <button className={classes.addBtn}>Add subscription</button> */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Label className={classes.inputLabel}>Service</Label>
        <Label style={{ marginRight: "20px" }} className={classes.inputLabel}>
          Next payment
        </Label>
        <Label className={classes.inputLabel}>Price</Label>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <InputGroup />
        <InputGroup />
        <InputGroup />
      </div>
      <Button
        onClick={(e) => {}}
        style={{
          alignSelf: "center",
          marginTop: "10px",
        }}
        minimal
        fill
      >
        <Icon size={25} color="white" icon="add" />
      </Button>
      <Divider className={classes.divider} />
      <SubsContainer service="Bebra" date="15 aug" price={15} />
    </div>
  );
};

const defaultValues: Required<ISubsPage> = {
  screenName: "",
};
