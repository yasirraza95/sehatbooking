import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Campaign from './components/Campaign/Campaign';
import ContactUs from './components/ContactUs/ContactUs';
import ForgotPass from './components/ForgotPass/ForgotPass';
import Faqs from './components/Home/Faqs';
import IndexOne from './components/Home/IndexOne';
import Login from './components/Login/Login';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Register from './components/Register/Register';
import TermsConditions from './components/TermsConditions/TermsConditions';
import BloodTips from './components/BloodTips/BloodTips';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<IndexOne />}/>
    <Route path="/login" element={<Login />}/>
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
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
