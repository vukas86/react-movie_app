import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/root/RootLayout";

import Home from "./pages/Home";
import Movies, { moviesLoader } from "./pages/Movies";
import Shows, { showsLoader } from "./pages/Shows";

import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "movies", element: <Movies />, loader: moviesLoader },
      { path: "shows", element: <Shows />, loader: showsLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
