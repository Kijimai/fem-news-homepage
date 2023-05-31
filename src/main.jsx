import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppProvider } from "./utils/Context.jsx"
import Root from "./routes/Root.jsx"

import { Categories, New, Trending, Popular } from "./routes/routes.jsx"
import Error from "./routes/Error.jsx"
import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "new",
        element: <New />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AppProvider>
        <App />
      </AppProvider>
    </RouterProvider>
  </React.StrictMode>
)
