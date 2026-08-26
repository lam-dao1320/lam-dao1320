import { createBrowserRouter } from "react-router"
import { MainLayout } from "./layout/MainLayout"
import { ProjectLayout } from "./layout/ProjectLayout"

export const router = createBrowserRouter([
    {
        path: "/lam-dao1320/",
        Component: MainLayout,
    },
    {
        path: "/lam-dao1320/:id",
        Component: MainLayout,
    },
    {
        path: "/lam-dao1320/projects/:id",
        Component: ProjectLayout,
    }
])