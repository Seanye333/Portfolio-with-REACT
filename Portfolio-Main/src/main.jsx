import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ContactPage from './components/ContactPage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'project',
        element: <ProjectPage  />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
