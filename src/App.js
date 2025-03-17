import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutCourses from "./Layout/LayoutCourses";
import LayoutStudents from "./Layout/LayoutStudents";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<LayoutDashboard />} />
        <Route path="/courses" element={<LayoutCourses />} />
        <Route path="/students" element={<LayoutStudents />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;