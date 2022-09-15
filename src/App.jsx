import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useMatch } from "react-router-dom";
import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Redirect,
} from "react-router-dom";
import Navigationbar from "./components/Navbar/Navbar";
import About from "./pages/About";
function App() {
  const match = useMatch();
  console.log(match);
  return (
    <>
      <Navigationbar />
      <Outlet />
      <About />
    </>
  );
}

export default App;
