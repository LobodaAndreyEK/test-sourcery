

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Contacts from "./pages/Contacts";
import Main from "./layouts/Main";
import Post from './pages/Post';

import PrivateRoute from "./components/PrivateRoute";
import { user } from './store';

const rolesPermission = {
  posts: ["admin"],
}

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <PrivateRoute><Home /></PrivateRoute>,
        },
        {
          path: "posts",
          element: <PrivateRoute allowedRoles={rolesPermission.posts}><Posts /></PrivateRoute>,
        },
        {
          path: "posts/:id",
          element: <PrivateRoute allowedRoles={rolesPermission.posts}><Post /></PrivateRoute>,
        },
        {
          path: "contacts",
          element: <PrivateRoute><Contacts /></PrivateRoute>,
        },
        {
          path: "*",
          element: <Navigate to="/" />
        }
      ],
    },
    {
      path: '/login',
      element: user.isAuth ? <Navigate to={"/"} /> : <div>I'm a login page</div>
    }

  ]);

  return  <RouterProvider router={router} />
 
}

export default App
