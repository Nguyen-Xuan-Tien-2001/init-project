import { createBrowserRouter } from "react-router-dom";
import { AuthControl } from "./pages/AuthControl";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const routes = [
  {
    path: "/",
    element: (
      <AuthControl>
        <Home />
      </AuthControl>
    ),
    handle: { icon: "null", title: "Main" },
  },
  {
    path: '/login',
    element: <Login />,
    handle: { icon: 'null', title: 'Login' },
    children: [],
  },
];
const router = createBrowserRouter([...routes]);
export default router;
