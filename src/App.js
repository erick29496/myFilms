import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/main-page.component';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
