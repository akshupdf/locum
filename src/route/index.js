import HomePage from "../components/Homepage/Homepage";
import { NavBar } from "../components/Navbar/NavBar";
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
]  