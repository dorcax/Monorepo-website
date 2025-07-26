import "./index.css"
import Login from "./pages/auth/Login"
import Register from './pages/auth/Register'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"

const router =createBrowserRouter([
  {
    path:"/",
    index:true,
    element:<Register />
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/dashboard",
    element:<Dashboard />
  }
])
const App = () => {
  return (
    <div>
      {/* <Register/> */}
      {/* <Login/> */}
      <RouterProvider router={router}>

      </RouterProvider>
     </div>
  )
}

export default App