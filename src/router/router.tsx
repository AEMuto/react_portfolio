import {createBrowserRouter} from "react-router-dom"
import Project from "../views/Project"
import NotFound from "../views/NotFound"
import Home from "../views/Home/_index"
import projectsData from "../data/projectsData"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/project/:id",
		element: <Project/>,
		loader: async ({params}) => {
			return projectsData
				.find((project) => project.id === parseInt(params.id ?? "", 10))
				?? "No Project with this ID"
		},
	},
	{
		path: "/*",
		element: <NotFound/>,
	},
])

export default router
