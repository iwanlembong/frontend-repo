// pages/index.js

"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import UpdateButton from '../../components/UpdateButton';
import Typography from '@mui/material/Typography';

const HomePage = () => {

  const authUser = useSelector((state) => state.authUser);

  if (!authUser) {
    return <Typography variant="h6">Please log in to access this page.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Welcome, {authUser.displayName || "User"}</Typography>
      <UpdateButton />
    </div>
  );
};

export default HomePage;
