import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./comportment/SignInSignUp/SignUp";
import SignIn from "./comportment/SignInSignUp/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}