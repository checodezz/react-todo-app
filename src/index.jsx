import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Todo from "./pages/Todo";
import About from "./pages/About";
import TodoDetails from "./pages/TodoDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path : "TodoDetails/:todoId",
    element : <TodoDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
