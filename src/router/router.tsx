import {createBrowserRouter} from "react-router-dom"
import Project from "../views/Project"
import NotFound from "../views/NotFound"
import Home from "../views/Home/_index"
import projectsData from "../data/projectsData"

const projectDataLoader = async ({params}: any) => {
	return projectsData
			.find((project) => project.id === parseInt(params.id ?? "", 10))
		?? "No Project with this ID"
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/project/:id",
		element: <Project/>,
		loader: projectDataLoader
	},
	{
		path: "/*",
		element: <NotFound/>,
	},
])



export default router
