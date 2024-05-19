import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./comportment/SignInSignUp/SignInSignUp";
import Dashboard from "./comportment/Dashboard/Dashboard";
import PrivateRoute from "./comportment/Security/PrivateRoute";
import DashHome from "./comportment/Dashboard/DashHome";
import Students from "./comportment/Students/Students";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />

        <Route path="/Dashboard/" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          <Route path="Home" element={<PrivateRoute><DashHome /></PrivateRoute>} />
          <Route path="Students" element={<PrivateRoute><Students /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}