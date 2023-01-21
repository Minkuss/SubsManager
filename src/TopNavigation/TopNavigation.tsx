import React, { FC, useContext, useState } from "react";
import { Button, Card, Classes } from "@blueprintjs/core";
import * as classes from "./TopNavigation.style";
import { AuthContext } from "../context/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Popover2 } from "@blueprintjs/popover2";

export const TopNavigation: FC = () => {
  const auth = useContext(AuthContext).auth;
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className={classes.header}>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink to={"/subs/all"}>
          {({ isActive }) => (
            <button
              style={
                isActive
                  ? {
                      border: "1px dashed #FFFFFF",
                    }
                  : {}
              }
              className={classes.btn}
            >
              All
            </button>
          )}
        </NavLink>
        <NavLink to={"/subs/important"}>
          {({ isActive }) => (
            <button
              style={
                isActive
                  ? {
                      border: "1px dashed #FFFFFF",
                    }
                  : {}
              }
              className={classes.btn}
            >
              Important
            </button>
          )}
        </NavLink>
      </div>
      <Popover2
        content={
          <Card
            style={{
              backgroundColor: "white",
            }}
          >
            <Button onClick={logOut} text="Exit" />
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
