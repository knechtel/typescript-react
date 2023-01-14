import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FunctionalComponent from "./component/FunctionalComponent";
import ErrorComponent from "./component/ErrorComponent";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/main" element={<FunctionalComponent message="john" />}></Route>
      <Route path="/error" element={<ErrorComponent />}></Route>
    </Routes>
  </BrowserRouter >
);
reportWebVitals()