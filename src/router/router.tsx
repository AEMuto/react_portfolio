import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@components/Layout";
import Loader from "@components/Loader";

import projectsData from "@data/projectsData";

const Home = lazy(() => import("@views/Home"));
const Project = lazy(() => import("@views/Project/_index"));
const NotFound = lazy(() => import("@views/NotFound"));

import { getProjectById, getTotalProjects } from "@projects/index";
import Hodor from "@views/Hodor";

//TODO: Change the projectLoader to this one & refactor the rest of the code
// meaning, we use mdx instead of markdown files, delete remark-gfm, etc.
const projectLoaderTest = async ({ params }: any) => {
  const current = getProjectById(parseInt(params.id ?? "", 10)) ?? 
    "No Project with this ID"
  
  return {
    current,
    total: getTotalProjects()
  }
}

const projectLoader = async ({ params }: any) => {
  const current =
    projectsData.find((project) => project.id === parseInt(params.id ?? "", 10)) ??
    "No Project with this ID";
  return {
    current: current,
    total: projectsData.length,
  };
};

const SuspenseLayout = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Layout>
);

const root = (
  <Route element={<SuspenseLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/project/:id" element={<Project />} loader={projectLoader} />
    <Route path="/project_test/0" element={<Hodor />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(root));

export default router;
