import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import SinglePostPage from "../pages/SinglePostPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <PostsPage /> },
            { path: ':id', element: <SinglePostPage /> },
            { path: 'contact', element: <Contact /> },
            { path: 'about', element: <About /> },
        ]
    },
])

export default router