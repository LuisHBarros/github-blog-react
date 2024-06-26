import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/main";
import { Article } from "../pages/article";
import { DefaultLayout } from "../layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  );
}
