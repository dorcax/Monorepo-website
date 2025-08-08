import "./index.css"
import Login from "./pages/auth/Login"
import Register from './pages/auth/Register'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import TransferTable from "./components/TransferTable"
import PopUpProvider from "./context/PopUpContext"
import ResetPassword from "./pages/auth/ResetPassword"
import Reports from "./pages/Dashboard/Reports"
import Transaction from "./pages/Dashboard/Transaction"
import Exchange from "./pages/Dashboard/Exchange"

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
    path: "/",
    element: <Dashboard />,
    children: [{
      index: true,
      element: <TransferTable />
    },{
      path:"settings",
      element:<ResetPassword/>
    },{
      path:"reports",
      element:<Reports/>
    },{
      path:"transactions",
      element:<Transaction/>
    },{
      path:"exchange",
      element:<Exchange/>
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