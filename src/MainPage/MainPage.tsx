import React, { FC, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useAuthStatus } from "../hooks/use-auth-status";
import { AllScreen, ImportantScreen } from "../screens";
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
    <div
      style={{
        backgroundColor: "rgba(35, 34, 34, 1)",
      }}
    >
      <TopNavigation />
      <Routes>
        <Route path="/all" element={<AllScreen />} />
        <Route path="/important" element={<ImportantScreen />} />
      </Routes>
    </div>
  );
};
