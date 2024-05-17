import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./comportment/SignInSignUp/SignInSignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}