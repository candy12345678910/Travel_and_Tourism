// import Navbar from "./component/Navbar";
import Admin from "./component/Admin";
import AdminLogin from "./component/AdminLogin";
import Home from "./component/Home";
import Booking from "./component/hotel_booking/Booking";
import Footer from "./component/Footer";
import About from "./component/About";
import Privacy from "./component/Privacy";
import Term from "./component/Term";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import Destination from "./component/Destination";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/booking" element={ <Booking/> } />
        <Route path="/privacy" element={ <Privacy/> } />
        <Route path="/term" element={ <Term/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/destination" element={ <Destination/> } />
        <Route path="/admin" element={ <AdminLogin/> } />
        <Route path="/viewadminpagedata" element={ <Admin/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
