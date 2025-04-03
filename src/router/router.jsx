import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from './PrivateRoute';
import JobApply from './../Pages/JobApply/JobApply';
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob.jsx/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>ERROR</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-portal-server-eight-tawny.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      },
      {
        path: '/addjob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      },
      {
        path: 'viewApplications/:job_id',
        element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-portal-server-eight-tawny.vercel.app/job-applications/jobs/${params.job_id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router;