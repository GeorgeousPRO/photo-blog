import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Redirect,
} from "react-router-dom";
import { ImageProvider } from "./context/ImageProvider";
import FormLogin from "./components/Form/FormLogin";
import { AuthProvider } from "./context/AuthProvider";
import Navigationbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Upload from "./pages/Upload";
import Current from "./pages/Edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageProvider>
    <AuthProvider>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="login" element={<FormLogin />} />
          <Route path="current" element={<Current />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ImageProvider>
);
