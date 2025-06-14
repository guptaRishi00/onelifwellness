import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../pages/Contact";
import HowWeAreGoingTo from "../pages/HowWeAreGoingTo";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
import BodyBasics from "../pages/BodyBasics";
import NotFound from "../pages/NotFound";
import WhyItMatters from "../pages/WhyItMatters";
import Introduction from "../pages/Introduction";
import WhoWeAre from "../pages/WhoWeAre";
import TermsAndConditions from "../pages/TermsAndConditions";
import Insights from "../pages/Insights";
import BlogPost from "../pages/BlogPost";
import OneLifeLayout from "../layouts/OneLifeLayout";
import Coming from "../pages/Coming";
import Welcome from "../pages/Welcome";
import HumanAnatomy from "../pages/HumanAnatomy";
import OrganExpanPage from "../pages/OrganExpanPage";
import BlogPage from "../pages/BlogPage";
import BlogDetail from "../pages/BlogDetail";
import AdminPage from "../pages/AdminPage";
import Blogs from "../components/Admin/Blogs";
import BlogFormPage from "../components/Admin/BlogFormPage";
import AdminLoginForm from "../components/Admin/AdminLoginForm";
import ProtectedRoute from "../components/Admin/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OneLifeLayout />,
    children: [
      {
        index: true, // Default route
        element: <Introduction />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/insights/:title",
        element: <BlogPost />,
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "/how-we-work",
        element: <HowWeAreGoingTo />,
      },
      {
        path: "/why-it-matters",
        element: <WhyItMatters />,
      },

      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/lets-talk",
        element: <Contact />,
      },
      {
        path: "/body-basics",
        element: <BodyBasics />,
      },
      {
        path: "/human-anatomy",
        element: <HumanAnatomy />,
      },
      {
        path: "/organ-expand/:type",
        element: <OrganExpanPage />,
      },
      {
        path: "/blog-page",
        element: <BlogPage />,
      },
      {
        path: "/blog-detail/:slug",
        element: <BlogDetail />,
      },
      {
        path: "admin", // Admin login route
        element: <AdminPage />,
      },
      {
        path: "admin--dashboard",
        // element: <ProtectedRoute />, // Protecting the admin routes
        children: [
          {
            path: "",
            element: <AdminPage />,
            children: [
              { path: "blogs", element: <Blogs /> },
              { path: "blogs/add", element: <BlogFormPage /> },
              { path: "blogs/edit/:id", element: <BlogFormPage /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/coming-soon",
    element: <Coming />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
