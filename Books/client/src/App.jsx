import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
};

export default App;
