import React from 'react'
import AppRoutes from './Components/utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL = 'https://65d0f936ab7beba3d5e3f3f9.mockapi.io/details/blogs'
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router = {router}  />
  </>
}

export default App