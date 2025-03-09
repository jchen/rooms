import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
document.addEventListener("DOMContentLoaded", function () {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
});

document.title = "Rooms @ CIT";
