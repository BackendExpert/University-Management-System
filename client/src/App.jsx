import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./comportment/SignInSignUp/SignInSignUp";
import Dashboard from "./comportment/Dashboard/Dashboard";
import PrivateRoute from "./comportment/Security/PrivateRoute";
import DashHome from "./comportment/Dashboard/DashHome";
import Students from "./comportment/Students/Students";
import Teachers from "./comportment/Teachers/Teachers";
import Subjects from "./comportment/Subjects/Subjects";
import Staff from "./comportment/Staff/Staff";
import MyProfile from "./comportment/MyStats/MyProfile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />

        <Route path="/Dashboard/" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
          <Route path="Home" element={<PrivateRoute><DashHome /></PrivateRoute>} />
          <Route path="Students" element={<PrivateRoute><Students /></PrivateRoute>} />
          <Route path="Teachers" element={<PrivateRoute><Teachers /></PrivateRoute>} />
          <Route path="Subjects" element={<PrivateRoute><Subjects /></PrivateRoute>} />
          <Route path="Staff" element={<PrivateRoute><Staff /></PrivateRoute>} />
          <Route path="MyProfile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}