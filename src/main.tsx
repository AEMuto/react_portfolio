import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "../node_modules/normalize.css/normalize.css";
import { Global } from "@emotion/react";
import { global } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={global} />
    <RouterProvider router={router} />
  </StrictMode>
);
