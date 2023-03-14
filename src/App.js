import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/root/RootLayout";

import Home from "./pages/Home";
import Movies, { moviesLoader } from "./pages/Movies";
import Shows, { showsLoader } from "./pages/Shows";

import ShowDetails, {
  showDetailsloader,
} from "./components/detailsPages/ShowDetails";
import MovieDetails, {
  movieDetailsLoader,
} from "./components/detailsPages/MovieDetails";

import Error from "./pages/Error";
import UserList from "./pages/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "movies",
        element: <Movies />,
        loader: moviesLoader,
        children: [],
      },
      { path: "shows", element: <Shows />, loader: showsLoader },
      { path: "mylist", element: <UserList /> },
      {
        path: "movies/:id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
      {
        path: "shows/:id",
        element: <ShowDetails />,
        loader: showDetailsloader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
