import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Layout/Error/Error";
import Blog from "../../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <Error></Error>,
                loader: ()=> fetch('https://grand-chef-server-sayem111103.vercel.app/chef')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                errorElement: <Error></Error>
            },
        ]
    }
])

export default router;