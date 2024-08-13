import { About } from "../components/AboutUs/aboutus";
import { ContactUs } from "../components/ContactUs/Contact";
import HomePage from "../components/Homepage/Homepage";
import { NavBar } from "../components/Navbar/NavBar";
import { Profile } from "../components/Profile/Profile";
import { Register } from "../components/signin/up/Register";
import { Signup } from "../components/signin/up/Signinpage";


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
      }, {
        path: '/register',
        element: <Register />
      },
]  