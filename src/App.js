import "./App.css";
import { Homepage, UserDetails } from "./components";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <div>
            <Homepage />
          </div>
        }
      />
      <Route
        path="/userdetails/:userId"
        element={
          <div>
            <UserDetails />
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
