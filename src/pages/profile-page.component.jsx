import * as React from 'react';

import { AuthContext, useAuth } from '../utils/hooks/useAuth.utils';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/layout/layout.component';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const { user, setUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <Layout>
      <h1>Profile</h1>
    </Layout>
  );
};

export default ProfilePage;