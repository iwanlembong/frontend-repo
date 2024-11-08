// components/LoginForm.js

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Typography, Container } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../apis/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/store'; // Import action

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
     
      dispatch(setAuthUser({
        uid: user.uid,
        displayName: user.displayName || user.email,
        email: user.email,
      }));

      alert('Logged in successfully');
      router.push('/main');
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default LoginForm;
