// Начало декларативного стиля
import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";
// Конец декларативного стиля

// Начало императивного стиля
function App() {
	// Начало декларативного стиля
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", null, new Date().getFullYear())
		)
	);
	// Конец декларативного стиля
}
// Конец императивного стиля

// Начало декларативного стиля
export default App;
// Конец декларативного стиля
