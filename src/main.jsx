import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './raw css file/style.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import MotherFile from './MotherFile';
import Blocks from './setting file/Blocks';
import Setting from './setting file/Setting';
import Welcome from './setting file/Welcome';
import DesignSystem from './setting file/DesignSystem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,
    children: [
      {
        path: "/",
        element: <MotherFile></MotherFile>  ,
      },
      {
        path: "/block",
        element:  <Blocks></Blocks> ,
      },
      {
        path: "/setting",
        element:  <Setting></Setting>    ,
      },
      {
        path: "/welcome",
        element:  <Welcome></Welcome>,
        children: [
          {
            path: "",
            element:  <DesignSystem></DesignSystem> ,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
