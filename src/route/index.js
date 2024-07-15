import HomePage from "../components/Homepage/Homepage";
import { NavBar } from "../components/Navbar/NavBar";


export const router = [
    {
      path: '/',
      element: <HomePage />
    },
    {
        path: '/navbar',
        element: <NavBar />
      },
]  