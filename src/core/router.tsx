import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EnterPage } from "../EnterPage";
import { MainPage } from "../MainPage";

export const CoreRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/subs/*" element={<MainPage />} />
        <Route path="*" element={<EnterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
