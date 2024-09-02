import { About } from "../components/AboutUs/aboutus";
import { ContactUs } from "../components/ContactUs/Contact";
import { Explore } from "../components/Explore/Explore";
import HomePage from "../components/Homepage/Homepage";
import { NavBar } from "../components/Navbar/NavBar";
import { Profile } from "../components/Profile/Profile";
import Privacy from "../components/privacy/Privacy";
import { ProfileEdit } from "../components/Profile/ProfileEdit";
import { Register } from "../components/signin/up/Register";
import { Signup } from "../components/signin/up/Signinpage";
import {MainSearch} from "../components/search-table/MainSearch";


export const router = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/navbar',
    element: <NavBar />
  },
  {
    path: '/signin',
    element: <Signup />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  },
  {
    path: '/aboutus',
    element: <About />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/explore',
    element: <Explore />
  },

  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/profilev2/:id',
    element: <ProfileEdit />
  },
  {
    path: '/search-page',
    element: <MainSearch />
  },
  {
    path: '/anesthesiology',
    element: <MainSearch />
  },
  {
    path: '/cardiology',
    element: <MainSearch />
  },
  {
    path: '/clinical-social-work',
    element: <MainSearch />
  },
  {
    path: '/dermatology',
    element: <MainSearch />
  },
  {
    path: '/emergency-medicine',
    element: <MainSearch />
  },
  {
    path: '/endocrinology',
    element: <MainSearch />
  },
  {
    path: '/gastroenterology',
    element: <MainSearch />
  },
  {
    path: '/hospital-medicine',
    element: <MainSearch />
  },
  {
    path: '/medical-oncology',
    element: <MainSearch />
  },
  {
    path: '/nephrology',
    element: <MainSearch />
  },
  {
    path: '/neurology',
    element: <MainSearch />
  },
  {
    path: '/womens-health',
    element: <MainSearch />
  },
  {
    path: '/ophthalmology',
    element: <MainSearch />
  },
  {
    path: '/otolaryngology-ent',
    element: <MainSearch />
  },
  {
    path: '/primary-care',
    element: <MainSearch />
  },
  {
    path: '/physiatry',
    element: <MainSearch />
  },
  {
    path: '/behavioral-health',
    element: <MainSearch />
  },
  {
    path: '/psychology',
    element: <MainSearch />
  },
  {
    path: '/radiology',
    element: <MainSearch />
  },
  {
    path: '/radiation-oncology',
    element: <MainSearch />
  },
  {
    path: '/rheumatology',
    element: <MainSearch />
  },
  {
    path: '/surgery',
    element: <MainSearch />
  },
  {
    path: '/urology',
    element: <MainSearch />
  },
]  