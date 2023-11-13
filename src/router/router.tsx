import {createBrowserRouter} from "react-router-dom"
import Project from "../views/Project"
import NotFound from "../views/NotFound"
import Home from "../views/Home/_index"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/project/:id",
		element: <Project />,
	},
	{
		path: "/*",
		element: <NotFound />,
	},
])

export default router
