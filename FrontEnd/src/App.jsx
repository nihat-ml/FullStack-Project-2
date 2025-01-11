import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from './router/routes';

const router=createBrowserRouter(ROUTES)
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
