import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import SinglePostPage from "../pages/SinglePostPage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import CoursesPage from "../pages/CoursesPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'posts', element: <PostsPage /> },
            { path: 'posts/:id', element: <SinglePostPage /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
            { path: 'login', element: <Login /> },
            { path: 'courses', element: <CoursesPage /> },
        ]
    },
])

export default router