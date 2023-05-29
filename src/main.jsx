import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppProvider } from "./utils/Context.jsx"
import Root from "./routes/Root.jsx"
import Error from "./routes/Error.jsx"
import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
