import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./comportment/SignInSignUp/SignInSignUp";
import Dashboard from "./comportment/Dashboard/Dashboard";
import PrivateRoute from "./comportment/Security/PrivateRoute";
import DashHome from "./comportment/Dashboard/DashHome";
import DashProfile from "./comportment/Dashboard/DashProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />

        <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          <Route index element={<DashHome />} />
          <Route path="/Profile" element={<DashProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}