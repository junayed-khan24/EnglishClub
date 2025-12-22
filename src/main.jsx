import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutClub from './assets/Componets/AboutClub.jsx';
import NotFoundPage from './assets/Componets/NotFoundPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutClub",
    element: <AboutClub></AboutClub>
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
