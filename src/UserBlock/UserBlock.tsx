import { Button, Card, Divider, H2 } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import * as classes from "./UserBlock.style";

export const UserBlock: FC = () => {
  const auth = useContext(AuthContext).auth;
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <Divider className={classes.divider} />
      <div className={classes.bodyConteiner}>
        <div>
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
        <div>
          <H2 className={classes.h2}>Your profit</H2>
        </div>
      </div>
    </>
  );
};
