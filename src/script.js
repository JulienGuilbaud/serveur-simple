import { createRoot } from "react-dom/client";
import { App } from "./composants/App.js";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);