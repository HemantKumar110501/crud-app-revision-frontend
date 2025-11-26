import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CreateEmpPage from "../pages/CreateEmpPage";
import AllEmpPage from "../pages/AllEmpPage";
import EditEmpPage from "../pages/EditEmpPage";
import PrivateRoute from "../privateRoute/PrivateRoute";


export const myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/about",
        element:<AboutPage/>
    },
    {
        path:"/contacts",
        element:<ContactsPage/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/signup",
        element:<SignupPage/>
    },
    {
        path:"/create-emp",
        element:<PrivateRoute>
                    <CreateEmpPage/>
                </PrivateRoute>
    },
    {
        path:"/all-emp",
        element:<PrivateRoute>
                    <AllEmpPage/>  {/**children prop mai ye AllEmp component bhej rhe h taaki route protected rahe iss PrivateRoute component k help se */}
                </PrivateRoute>
    },
    {
        path:"/edit-emp/:id", // ab url se jobhi id h wo apne aap is :id dynamic variable  mai store ho jyega
        element:<EditEmpPage/>
    }
])














