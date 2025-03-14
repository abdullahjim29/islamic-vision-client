import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router';
import SeriesContextApi from './layout/SeriesContextApi';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeriesContextApi>
    <RouterProvider router={router}></RouterProvider>
    </SeriesContextApi>
  </StrictMode>,
)
