import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import projectsData from "../data/projectsData";
import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const Home = lazy(() => import("../views/Home/_index"));
const Project = lazy(() => import("../views/Project/_index"));
const NotFound = lazy(() => import("../views/NotFound"));

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
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(root));

export default router;
