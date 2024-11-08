// components/UpdateButton.js

import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/store'; // or any action you want to trigger

const UpdateButton = () => {
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.authUser);

  const handleClick = () => {
    console.log(authUser, ">>>>>>> ISI UPDARTE BUTTON");
    // Example action: update user information in the Redux store
    dispatch(setAuthUser({
      displayName: authUser.useDispatch || authUser.email,
      email:authUser.email,
    }));
    
    // Display a message or do any additional tasks
    alert("User information updated!");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Update Information
    </Button>
  );
};

export default UpdateButton;
