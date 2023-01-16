import React, { FC, useContext } from "react";
import { Button } from "@blueprintjs/core";
import * as classes from "./TopNavigation.style";
import { AuthContext } from "../context/authContext";

export const TopNavigation: FC = () => {
  const auth = useContext(AuthContext).auth;
  return (
    <div className={classes.header}>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button className={classes.btn}>All</button>
        <button className={classes.btn}>Important</button>
      </div>
      <img
        className={classes.avatar}
        src={
          auth.currentUser?.photoURL != null ? auth.currentUser?.photoURL : ""
        }
        alt=""
      />
    </div>
  );
};
