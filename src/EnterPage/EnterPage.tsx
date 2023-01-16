import React, { FC, useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../context/authContext";
import * as classes from "./EnterPage.style";
import { useNavigate } from "react-router-dom";

export const EnterPage: FC = () => {
  const auth = useContext(AuthContext).auth;
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const enterIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential != null ? credential.accessToken : {};
        const user = result.user;
        navigate("/subs");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className={classes.btnBlock}>
      <button onClick={enterIn} className={classes.btn}>
        Enter by Google
      </button>
    </div>
  );
};
