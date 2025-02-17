import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@components/Layout";
import Loader from "@components/Loader";

const Home = lazy(() => import("@views/Home"));
const Project = lazy(() => import("@/views/Project"));
const NotFound = lazy(() => import("@views/NotFound"));

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
    <Route path="/project/:id" element={<Project />}/>
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(root));

export default router;
