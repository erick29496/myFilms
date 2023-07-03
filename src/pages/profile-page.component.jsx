import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import MenuAppBar from '../components/app.bar/app-bar.component'

const ProfilePage = () => {

  const theme = createTheme();

  return (
    <main className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar/>
      </ThemeProvider>
    </main>
  );
};

export default ProfilePage;