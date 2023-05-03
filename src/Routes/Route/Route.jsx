import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Layout/Error/Error";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Layout/Login/Login";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import Registration from "../../components/Registration/Registration";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <Error></Error>,
                loader: () => fetch('https://grand-chef-server-sayem111103.vercel.app/chef')
            },
            {
                path: 'blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
                errorElement: <Error></Error>
            },
        ]
    },

    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/login',
                element: <LoginPage></LoginPage>,
                errorElement: <Error></Error>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;