import Root from "./components/Root";
import Text from "./components/Text";
import Button from "./components/Button";
import Layout from "./components/Layout";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={<Root />}>
    <Route path="text" element={<Text />} />
    <Route path="button" element={<Button />} />
    <Route path="layout" element={<Layout />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
