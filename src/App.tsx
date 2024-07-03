// import "./App.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UserDetailsForm from "./pages/userDetailsForm/UserDetailsForm";
import SecondPage from "./pages/page2/SecondPage";

function App() {
  const userDetails = localStorage.getItem("userDetails");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<UserDetailsForm />} />
        <Route
          path="/second"
          element={userDetails ? <SecondPage /> : <Navigate to={"/"} replace />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
