
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import SingleGame from '../Components/SingleGame';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';

const Router =createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/:uniqueName",
                element:<SingleGame></SingleGame>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default Router;