import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@router/router";
import { Global } from "@emotion/react";
import { global } from "@styles/global";
import { LanguageProvider } from "@contexts/LanguageContext";
import "../node_modules/normalize.css/normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <Global styles={global} />
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
