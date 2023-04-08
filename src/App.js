import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Campaign from "./Components/Campaign/Campaign";
import ContactUs from "./Components/ContactUs/ContactUs";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Faqs from "./Components/Home/Faqs";
import IndexOne from "./Components/Home/IndexOne";
import Login from "./Components/Login/Login";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Register from "./Components/Register/Register";
import TermsConditions from "./Components/TermsConditions/TermsConditions";
import BloodTips from "./Components/BloodTips/BloodTips";
import FindDonor from "./Components/FindDonor/FindDonor";
import Appointment from "./Components/Appoinment/Appointment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/index-one" element={<IndexOne />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/blood-tips" element={<BloodTips />} />
          <Route path="/find-donor" element={<FindDonor />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
