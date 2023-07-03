import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/main-page.component';
import ProfilePage from './pages/profile-page.component';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
