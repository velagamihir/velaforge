import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//importing the third party toaster
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: { background: "#333", color: "#fff" },
        }}
      />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
