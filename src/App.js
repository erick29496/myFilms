import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

import { AuthContext } from './utils/hooks/useAuth.utils';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './pages/main-page.component';
import ProfilePage from './pages/profile-page.component';

const App = () => {

  const [user, setUser] = useState('');
  const value = useMemo(() => ({
    user, setUser
  }), [user]);
  const theme = createTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/*",
      element: <MainPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    }
  ]);

  return (
    <div className="App">
      <AuthContext.Provider value={ value }>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router}/>
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
