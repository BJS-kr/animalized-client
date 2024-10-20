import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App, { characters, inputs } from "./App";
import { message } from "../wailsjs/go/models";
import { EventsOn } from "../wailsjs/runtime/runtime";
import { INPUT_TYPE } from "./constansts";
import { handleJoin } from "./handlers/join";
const container = document.getElementById("root");

const root = createRoot(container!);
EventsOn("input", (input: message.Input) => {
  if (!input || !input.user_id) return;

  if (inputs.has(input.user_id)) {
    inputs.get(input.user_id)!.inputs.push(input);
  } else if (input.type === INPUT_TYPE.JOIN) {
    const isExist =
      characters.findIndex((c) => c.userId === input.user_id) !== -1;

    if (!isExist) {
      handleJoin(input.user_id, characters, inputs);
    }
  } else if (input.type === INPUT_TYPE.QUIT) {
    const index = characters.findIndex((c) => c.userId === input.user_id);
    characters.splice(index, 1);
  }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
