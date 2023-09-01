import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { AuthProvider } from "./components/contexts/AuthProvider.jsx";
import AxiosInterceptor from "./components/interceptors/AxiosInterceptor";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/css/styles.css";

if (import.meta.env.VITE_REACT_ENV !== "development") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AxiosInterceptor>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AxiosInterceptor>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
