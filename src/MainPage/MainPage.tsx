import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useAuthStatus } from "../hooks/use-auth-status";
import { TopNavigation } from "../TopNavigation";

export const MainPage: FC = () => {
  const authStatus = useAuthStatus();
  const navigate = useNavigate();
  const auth = useContext(AuthContext).auth;

  useEffect(() => {
    if (authStatus !== "unauthenticated") return;
    navigate("/");
  }, [authStatus, navigate]);

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <TopNavigation />
      <div>;sdf,</div>
    </div>
  );
};
