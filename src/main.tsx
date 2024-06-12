import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { FizzBuzz, Error404 } from "./pages/index.ts";

const router = createBrowserRouter([
	{ path: "/", element: <App />, errorElement: <Error404 /> },
	{ path: "/fizz-buzz", element: <FizzBuzz /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
