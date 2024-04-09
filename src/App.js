import Root from "./components/Root";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={<Root />}>

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
