import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "./provider.tsx";

import App from "@/App";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
