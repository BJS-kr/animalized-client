import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App, { inputs } from "./App";
import { message } from "../wailsjs/go/models";
import { EventsOn } from "../wailsjs/runtime/runtime";
const container = document.getElementById("root");

const root = createRoot(container!);
EventsOn("input", (input: message.Input) => {
  if (input && input.user_id && inputs.has(input.user_id)) {
    inputs.get(input.user_id)!.inputs.push(input);
  }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
