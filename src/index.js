import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/tailwind.css';
import 'flowbite';
import App from './Pages/App';
import Login from './Pages/onboarding/Login';
import Register from './Pages/onboarding/Register';
import Services from './Pages/us/Services';
import FrequentlyAskedQuestions from './Pages/us/FrequentlyAskedQuestions';
import Contact from './Pages/us/Contact';
import TermsAndConditions from './Pages/us/TermsAndConditions';
import BecomeARhendor from './Pages/onboarding/BecomeARhendor';
import PrivacyPolicy from './Pages/us/privacypolicy';
import AboutUs from './Pages/us/Aboutus';
import Dashboard from './Pages/user/Dashboard';
import SetPasswordSuccess from './Pages/onboarding/SetPasswordSuccess';
import Notifications from './Pages/user/Notifications';
import Account from './Pages/user/Account';
import Messages from './Pages/user/Messages';
import DashboardServices from './Pages/user/DashboardServices';
import ServiceRhendors from './Pages/user/ServiceRhendors';
import Feeds from './Pages/user/Feeds';
import AppSettings from './Pages/user/AppSettings';
import EditProfile from './Pages/user/EditProfile';
import UserProfile from './Pages/user/UserProfile';
import ForgotPassword from './Pages/onboarding/ForgotPassword';
import ResetPassword from './Pages/onboarding/ResetPassword';
import { ServiceContextProvider } from './context/serviceContext';
import { MessageContextProvider } from './context/messageContext';

ReactDOM.render(
  <ServiceContextProvider>
    <MessageContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/faq" element={<FrequentlyAskedQuestions />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/becomearhendor" element={<BecomeARhendor />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* onboarding pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/:route" element={<Login />} />
          <Route path="/login/:route/:params" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/setpasswordsuccess" element={<SetPasswordSuccess />} />
          <Route path="/verifyemail" element={<Dashboard />} />

          {/* dashboard pages */}
          <Route path="/connect" element={<Dashboard />} />
          <Route path="/connect/:refreshPosts" element={<Dashboard />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/feeds/:service" element={<Feeds />} />
          <Route path="/dashboardServices" element={<DashboardServices />} />
          <Route path="/servicerhendors/:id" element={<ServiceRhendors />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<Messages />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/appsettings" element={<AppSettings />} />
          <Route path="/editprofile" element={<EditProfile />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </MessageContextProvider>
  </ServiceContextProvider>,
  document.getElementById('root')
);
