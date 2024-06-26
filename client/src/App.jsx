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
import Library from "./comportment/Library/Library";
import MyMarks from "./comportment/MyStats/MyMarks";
import Departments from "./comportment/Departments/Departments";
import Courses from "./comportment/Courses/Courses";
import Batches from "./comportment/Batches/Batches";
import Events from "./comportment/Events/Events";
import MyCourses from "./comportment/MyStats/MyCourses";
import Notifications from "./comportment/MyStats/Notifications";
import Semesters from "./comportment/Semesters/Semesters";
import Exams from "./comportment/Exams/Exams";
import Expenses from "./comportment/Expenses/Expenses";
import ViewStd from "./comportment/Students/ViewStd";

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
          <Route path="Library" element={<PrivateRoute><Library /></PrivateRoute>} />
          <Route path="MyMarks" element={<PrivateRoute><MyMarks /></PrivateRoute>} />
          <Route path="Departments" element={<PrivateRoute><Departments /></PrivateRoute>} />
          <Route path="Courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
          <Route path="Batches" element={<PrivateRoute><Batches /></PrivateRoute>} />
          <Route path="Events" element={<PrivateRoute><Events /></PrivateRoute>} />
          <Route path="MyCourses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
          <Route path="Notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
          <Route path="Semesters" element={<PrivateRoute><Semesters /></PrivateRoute>} />
          <Route path="Exams" element={<PrivateRoute><Exams /></PrivateRoute>} />
          <Route path="Expenses" element={<PrivateRoute><Expenses /></PrivateRoute>} />
          <Route path="Students/ViewStd/:id" element={<PrivateRoute><ViewStd /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}