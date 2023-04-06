import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Campaign from './Components/Campaign/Campaign';
import ContactUs from './Components/ContactUs/ContactUs';
import ForgotPass from './Components/ForgotPass/ForgotPass';
import Faqs from './Components/Home/Faqs';
import IndexOne from './Components/Home/IndexOne';
import Login from './Components/Login/Login';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Register from './Components/Register/Register';
import TermsConditions from './Components/TermsConditions/TermsConditions';
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

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
