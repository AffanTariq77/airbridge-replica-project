import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./mobile-native.css";
import "./responsive-pages.css";

createRoot(document.getElementById("root")!).render(<App />);
