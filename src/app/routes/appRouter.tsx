import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { Home } from '@/pages/home';
import { FormPage } from '@/pages/form';
import { ResultPage } from '@/pages/resultPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
      {
        path: '/result',
        element: <ResultPage />,
      },
    ],
  },
]);
