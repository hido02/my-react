import { RouterProvider } from 'react-router-dom';
import router from './Router';

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);