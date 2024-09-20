import React from "react";
import MainLayout from "./Layouts/MainLayout";
import Body from "./component/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Body/>} />
      </Route>
      </Routes>
    </ BrowserRouter>
  );
};

export default App;
