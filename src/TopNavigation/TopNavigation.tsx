import React, { FC, useContext, useState } from "react";
import { Button, Card, Classes } from "@blueprintjs/core";
import * as classes from "./TopNavigation.style";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Popover2 } from "@blueprintjs/popover2";

export const TopNavigation: FC = () => {
  const auth = useContext(AuthContext).auth;
  const navigate = useNavigate();

  return (
    <div className={classes.header}>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={() => {
            navigate("/subs/all");
          }}
          className={classes.btn}
        >
          All
        </button>
        <button
          onClick={() => {
            navigate("/subs/important");
          }}
          className={classes.btn}
        >
          Important
        </button>
      </div>
      <Popover2
        content={
          <Card
            style={{
              backgroundColor: "white",
            }}
          >
            Hello
          </Card>
        }
        interactionKind="click"
        placement="bottom"
        renderTarget={({ isOpen, ref, ...targetProps }) => (
          <Button
            minimal
            elementRef={ref}
            {...targetProps}
            className={classes.avatarBtn}
          >
            <img
              className={classes.avatar}
              src={
                auth.currentUser?.photoURL != null
                  ? auth.currentUser?.photoURL
                  : ""
              }
              alt=""
            />
          </Button>
        )}
      />
    </div>
  );
};
