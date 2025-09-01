import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './routes/RootLayout'
import { HomePage } from './routes/home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
], { basename: import.meta.env.BASE_URL })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
