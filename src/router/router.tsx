import React from 'react';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import {Insured} from '../features'
import Plans from '../features/Plans/Plans';
import { Summary } from '../features/summary/Summary';

export const AppRoutes: React.FC = () => {

    const router = createBrowserRouter([
         
        {
            path: "/rimac-challenge/",
            element: <Insured />
          },
          {
            path: "/planes",
            element:<PrivateRoute><Plans /></PrivateRoute>,
          },  
          {
            path: "/resumen",
            element:<Summary />,
          },
         
      ]);
      

  return (
    <RouterProvider router={router}/>
  );
};

export default AppRoutes;