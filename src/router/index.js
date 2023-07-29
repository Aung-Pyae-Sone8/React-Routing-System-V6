import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

import {
    createBrowserRouter,
  } from "react-router-dom"; 
  
  const router = createBrowserRouter([
    {
      path: "/", //localhost:3000/
      element: <App/>,
      children : [
        {
            path : '' , // localhost:3000
            element : <Home/>
        },
        {
            path : '/about' , // localhost:3000/about
            element : <About/>
        },
        {
            path : '/contact',
            element : <Contact />
        }
      ]
    },
  ]);

  export default router;