import AddPage from "../pages/User/AddPage"
import DetailPage from "../pages/User/DetailPage"
import Favorites from "../pages/User/Favorites"
import Home from "../pages/User/Home"
import Members from "../pages/User/Members"
import NoPage from "../pages/User/NoPage"
import UserRoot from "../pages/User/UserRoot"


const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "/members",
                element:<Members/>
            },
            {
                path: "/members/:id",
                element:<DetailPage/>
            },
            {
                path: "/favorites",
                element:<Favorites/>
            },
            {
                path: "/addpage",
                element:<AddPage/>
            }
            

        ]
    },
    {
        path: "*",
        element:<NoPage/>
    },


]

export default ROUTES