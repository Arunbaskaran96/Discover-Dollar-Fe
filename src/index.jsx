import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { register } from "swiper/element/bundle";
register();
import "./app.scss";

const root = document.getElementById("root");

createRoot(root).render(<App />);
