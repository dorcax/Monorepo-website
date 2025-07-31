import "./index.css"
import Login from "./pages/auth/Login"
import Register from './pages/auth/Register'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import TransferTable from "./components/TransferTable"
import PopUpProvider from "./context/PopUpContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{
      index: true,
      element: <TransferTable />
    }]
  }
])
const App = () => {
  return (

    <PopUpProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </PopUpProvider>

  )
}

export default App