import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./stylesheets/reset.css";
import "./stylesheets/global.css";
import "./stylesheets/utilities.css";

import App from "./app";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
