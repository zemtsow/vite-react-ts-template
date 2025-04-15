import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import("@/pages/home"))
const NotFound = React.lazy(() => import("@/pages/NotFound"))

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
]

const RouterProvider = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          caseSensitive
          element={
            <React.Suspense fallback={<p />}>
              {element}
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  )
}

export default RouterProvider
