import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./Componets/Security/AuthContext"
import NavLayout from "./Nav/NavLayout"
import PrivateRoute from "./Componets/Security/PrivateRoute"
import Signup from "./Pages/Signup"

import Home from "./Body/Home"
import Login from "./Pages/Login"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1000,
              backgroundColor: "white",
            }}
          >
            <NavLayout />
          </div>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            {/* Optionally add a redirect to /home or /login here */}
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes

