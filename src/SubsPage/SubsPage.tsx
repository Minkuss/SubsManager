import React, { FC } from "react";
import * as classes from "./SubsPage.style";

interface ISubsPage {
  screenName: string;
}

export const SubsPage: FC<ISubsPage> = (props) => {
  const { screenName }: ISubsPage = { ...defaultValues, ...props };

  return (
    <div className={classes.subsBody}>
      <button className={classes.addBtn}>Add subscription</button>
    </div>
  );
};

const defaultValues: Required<ISubsPage> = {
  screenName: "",
};
