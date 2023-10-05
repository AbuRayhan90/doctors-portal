import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import ProtectRouter from "./components/ProtectRouter";
import ResetEmail from "./components/ResetEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="appointment"
            element={
              <ProtectRouter>
                <Appointment />
              </ProtectRouter>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="resetemail" element={<ResetEmail />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
