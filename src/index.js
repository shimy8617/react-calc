import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<App />} />
    </Router>
  </React.StrictMode>
);
