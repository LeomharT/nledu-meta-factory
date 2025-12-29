import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppShell from "./app";
import "./index.css";

const root = createRoot(document.querySelector("#root") as HTMLDivElement);

root.render(
  <StrictMode>
    <AppShell />
  </StrictMode>
);
