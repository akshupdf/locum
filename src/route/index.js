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
import SearchTable from "../components/search-table/SearchTable";


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
    element: <SearchTable />
  },
  {
    path: '/anesthesiology',
    element: <SearchTable />
  },
  {
    path: '/cardiology',
    element: <SearchTable />
  },
  {
    path: '/clinical-social-work',
    element: <SearchTable />
  },
  {
    path: '/dermatology',
    element: <SearchTable />
  },
  {
    path: '/emergency-medicine',
    element: <SearchTable />
  },
  {
    path: '/endocrinology',
    element: <SearchTable />
  },
  {
    path: '/gastroenterology',
    element: <SearchTable />
  },
  {
    path: '/hospital-medicine',
    element: <SearchTable />
  },
  {
    path: '/medical-oncology',
    element: <SearchTable />
  },
  {
    path: '/nephrology',
    element: <SearchTable />
  },
  {
    path: '/neurology',
    element: <SearchTable />
  },
  {
    path: '/womens-health',
    element: <SearchTable />
  },
  {
    path: '/ophthalmology',
    element: <SearchTable />
  },
  {
    path: '/otolaryngology-ent',
    element: <SearchTable />
  },
  {
    path: '/primary-care',
    element: <SearchTable />
  },
  {
    path: '/physiatry',
    element: <SearchTable />
  },
  {
    path: '/behavioral-health',
    element: <SearchTable />
  },
  {
    path: '/psychology',
    element: <SearchTable />
  },
  {
    path: '/radiology',
    element: <SearchTable />
  },
  {
    path: '/radiation-oncology',
    element: <SearchTable />
  },
  {
    path: '/rheumatology',
    element: <SearchTable />
  },
  {
    path: '/surgery',
    element: <SearchTable />
  },
  {
    path: '/urology',
    element: <SearchTable />
  },
]  